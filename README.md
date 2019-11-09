## Prueba BackEnd NodeJS

#### Como desplegar
## Prueba BackEnd NodeJS

#### Como desplegar

1. Clonar el repositorio `git clone https://bitbucket.org/EndersonPro/prueba-backend-nodejs.git PruebaBackEnderson`

2. cd `path/to/project/PruebaBackEnderson`

3. Usar el comando `git checkout develop` para moverse a la rama de desarrollo

4. Instalar las dependencias `npm install` o `yarn`

5. Para el entorno de desarrollo es importante verificar la instalación de mongoDB para use el comando `mongo --version` si en su terminal no ve algo como esto: 

```bash
mongo --version
Output: MongoDB shell version v4.0.10
```

   Deberá seguir la guía de instalación de mongoDB para su sistema operativo. [Guia de instalacion](https://docs.mongodb.com/manual/installation/)

   Luego de instalar mongo en su computador deberá ejecutar el comando `mongod` para levantar el servicio de mongo o `mongod --dbpath="C:<path/to/db>"` para especificar la ruta de la base de datos, para mayor información entre aquí [Más información](https://docs.mongodb.com/manual/reference/program/mongod/)

   Por defecto el puerto de conexión de mongoDB es `27017` pero usted puede cambiar esto en el `index.js`

#### Corriendo servidor en local y probando endpoints con postman

- Dentro del directorio del proyecto correr el comando `node index --mode local` para levantar los servidores en local, se espera recibir por consola algo como esto: 

```bash
  $ node index --mode local 
  Servidor [PALINDROME] corriendo en 9000 y host 127.0.0.1 
  Servidor [HISTORIAL] corriendo en 9001 y host 127.0.0.1 
  Servidor [AUTH] corriendo en 9002 y host 127.0.0.1     
  Servidor [REGISTER] corriendo en 9003 y host 127.0.0.1 
  Base de datos conectada
```

- Registrando un usuario nuevo con postman: ` http://127.0.0.1:9003/register` solicitud de tipo `POST` body de tipo raw `Json`  
`

```json
  {
  	"nombre":"Enderson Vizcaino",
  	"email":"enjaviga@gmail.com",
  	"password":"19981406",
    "role":"ADMIN_ROLE"
  }
```

  Iniciar sesión ` http://127.0.0.1:9002/login` solicitud de tipo `POST` body de tipo raw `Json` 

```json
  {
  	"email":"enjaviga2@gmail.com",
  	"password":"19981406"
  }
```

- Obtener histórico de palabras ` http://127.0.0.1:9001/historial ` solicitud de tipo `GET` 

  La documentación completa del uso de la api se encuentra publicada [DOCUMENTACION COMPLETA DE LA API](https://documenter.getpostman.com/view/4649158/SW18wEk3?version=latest#18b7e8d8-1490-41fc-a2dc-01c553f0de10)

Correr test

```
npm test
```