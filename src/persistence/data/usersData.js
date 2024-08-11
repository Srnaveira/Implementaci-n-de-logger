const usersModel = require('../models/users.model.js');
const mongoStore = require('connect-mongo');
const session = require('express-session');
const { logger } = require('../../utils/logger.js');

module.exports = {
    login: async (username) => {
        try {      
            return await usersModel.findOne({email: username}); 
        } catch (error) {  
            logger.info("User doesn't exists")
            throw new Error("User doesn't exists", error)   
        }
    },

    register: async (newUser) => {
        try {
            await usersModel.create(newUser)
            logger.info("Cuena Creada")
        } catch (error) {
            logger.error("Hubo un problema al crear la cuentra")
            throw error;
        }
    },

    findByID: async (id) =>{
        try {
            return await usersModel.findById(id)    
        } catch (error) {
            logger.error("no se encontro ese ID")
            throw error;
        } 
    },

    findByCartId: async (cartId) =>{
        try {
            return await usersModel.findOne({cartId: cartId})    
        } catch (error) {
            logger.error("no se encontro ese ID")
            throw error;
        }
    },

    sessionConfig: () => {
        return session({
            store: mongoStore.create({ mongoUrl: process.env.MONGO_URL }),
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false,
                path: '/',
                expires: new Date(Date.now() + (100000)),
                maxAge: 100000
            }
        })
    }
}
