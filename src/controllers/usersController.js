
async function login (req, res) {
    try {
        if (!req.user) {
            return res.status(400).send({ status: 'error', error: "Invalid credentials" })
        } 
                
        req.session.user = {
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            age: req.user.age,
            email: req.user.email,
            rol: req.user.rol,
            cartId: req.user.cartId
        }
       
        if(req.session.user.rol === "user"){
            res.status(200).redirect('/api/products/');
        } else {
            res.status(200).redirect('/api/admin/realtimeproducts');
        }
        
    } catch (err) {
        req.logger.info("Error al iniciar sesión")
        res.status(500).send('Error al iniciar sesión');
    }
}

async function faillogin (req, res) {
    res.send({ error: "Falied login" })
}


async function register (req, res) {
    try {
        req.logger.info({ status: "success", message: "Usuario registrado" })
        res.status(200).redirect('/api/users/login');
    } catch (err) {
        req.logger.error("Error al registrar usuario");
        res.status(500).send('Error al registrar usuario');           
    }
}

async function failregister (req, res) {
    req.logger.info("Failed Strategy")
    res.send({ error: "Failed" })
}


async function logout (req, res) {
    req.session.destroy((err) => {
        if (err) {
            req.logger.info('Error al cerrar sesión')
            return res.status(500).send('Error al cerrar sesión');
        } else {
            res.clearCookie('connect.sid').redirect('/login');
        }                 
    });  
}

module.exports = {
    login,
    register,
    faillogin,
    failregister,
    logout
}
