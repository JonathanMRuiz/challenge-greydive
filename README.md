# Challenge Greydive

Realizar una app en React.js que lea el siguiente archivo JSON y genere con cada ítem una interfaz de app de encuesta (como Google Forms).
En cuanto a diseño y estética tiene que diferir de Google Forms. Puedes utilizar cualquier librería que creas necesaria.

Las respuestas de la encuesta deben ser enviadas a una base de datos de Firebase.
Dicha base de datos tiene que ser de su propiedad. No nos compartas acceso a la base de datos.

Por último, traé las respuestas de la base de datos ya mencionada y mostralas en la misma app pero en otra ruta. Al presionar “enviar” en el formulario tiene que aparecer un mensaje y el acceso a esa ruta en donde estarán las respuesta s. El diseño y estética queda a libre elección.

## Demo

La aplicación fue deployada en Vercel.

https://challenge-greydive-kappa-ecru.vercel.app/

## Instalación

El proyecto esta realizado con `create-react-app`.

Para poder instalar las dependencias de la aplicación debera abrir el proyecto en su terminal e ingresar :

```bash
  npm install
```

## Environment Variables

En la carpeta raiz del proyecto se encuentra un archivo `.example.env` el cual esta listo para utilizarse borrando la extension `.example` y quedando un archivo llamado `.env`.

Las variables tienen que ser completadas con los datos que proporciona Firebase al crear la base de datos.

`REACT_APP_API_KEY`

`REACT_APP_AUTH_DOMAIN`

`REACT_APP_PROJECT_ID`

`REACT_APP_STORAGE_BUCKET`

`REACT_APP_MESSAGING_SENDER_ID`

`REACT_APP_APP_ID`

`REACT_APP_MEASUREMENT_ID`

![App Screenshot](https://parzibyte.me/blog/wp-content/uploads/2021/11/Configurar-SDK-de-Firebase-con-firebaseConfig.png)

## 🛠 Skills

Tecnologias utilizadas:

ReactJS

Javascript

Tailwind CSS

PropTypes

Formik
