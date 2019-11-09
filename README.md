<<<<<<< HEAD
## Prueba BackEnd NodeJS

#### Como desplegar

1. Clonar el repositorio `git clone https://bitbucket.org/EndersonPro/prueba-backend-nodejs.git PruebaBackEnderson`

2. cd `path/to/project/PruebaBackEnderson`

3. Instalar las dependencias `npm install` o `yarn`

4. Para el entorno de desarrollo es importante verificar la instalación de mongoDB para use el comando `mongo --version` si en su terminal no ve algo como esto: 

   ```bash
   mongo --version
   >> MongoDB shell version v4.0.10
   ```

   Deberá seguir la guía de instalación de mongoDB para su sistema operativo.[Guia de instalacion](https://docs.mongodb.com/manual/installation/)

   Luego de instalar mondo en su computador deberá ejecutar el comando `mongod` para levantar el servicio de mongo o `mongod --dbpath="C:<path/to/db>"` para especificar la ruta de la base de datos, para mayor información entre aquí [Más información](https://docs.mongodb.com/manual/reference/program/mongod/)

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

  ```json
  {
  	"nombre":"Enderson Vizcaino",
  	"email":"enjaviga@gmail.com",
  	"password":"19981406",
  	"role":"ADMIN_ROLE"
  }
  ```

- Iniciar sesión ` http://127.0.0.1:9002/login` solicitud de tipo `POST` body de tipo raw `Json` 

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
=======
**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
>>>>>>> ee2376476124047c43c719c3675cf4c938114d92
