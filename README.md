# Implementacion de logger

## DESAFÍO ENTREGABLE

### Consigna

>Basado en nuestro proyecto principal, implementar un logger

### Aspectos a incluir

>Primero, definir un sistema de niveles que tenga la siguiente prioridad (de menor a mayor):
debug, http, info, warning, error, fatal

![alt text](/img/image.png)

>Después implementar un logger para producción, el logger productivo debería loggear sólo a partir de nivel info.

![alt text](/img/image-1.png)

>Además, el logger deberá enviar en un transporte de archivos a partir del nivel de error en un nombre “errors.log”

![alt text](/img/image-2.png)

![alt text](/img/image-3.png)

>Agregar logs de valor alto en los puntos importantes de tu servidor (errores, advertencias, etc) y modificar los console.log() habituales que tenemos para que muestren todo a partir de winston.

>Crear un endpoint /loggerTest que permita probar todos los logs

![alt text](/img/image-4.png)

![alt text](/img/image-5.png)

![alt text](/img/image-6.png)