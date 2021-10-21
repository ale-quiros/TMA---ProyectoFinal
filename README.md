Pasos para ejecutar el proyecto final:

1. Levantar el sitio cypress-realworld-app:
1.1. Clonar un repositorio de Github (https://github.com/Maximus1285/cypress-realworld-app)
1.2. Ejecutar "yarn install" 
1.3. Obtener Usuario de prueba que sera utizado en las variables de ambiente para poder ejecutar el proyecto:
    1.3.1. Si se esta trabajando en linux: Ejecutar "yarn list:dev:users" y seleccionar un username
    1.3.2. Si se esta trabajando en windows: Abrir el archivo data/database.json y seleccionar un username
1.4. Ejecutar "yarn dev"
-----------------------------------------------------------------------------------

2. Ejecutar el proyecto:
2.1. Clonar el repositiorio del proyecto 
git clone https://github.com/ale-quiros/TAM-Tarea2

2.2. Abrir archivo cypress.env.json y agregar la siguiente informacion

    2.2.1. Reenplazar USUARIO_PRUEBA por el usuario de prueba obtenido anteriormente de la base de datos del proyecto realworld-app (1.3 - Paso 3)
    2.2.2. Reenplazar PASWORD por el password de prueba de los usuarios de la base de datos del proyecto realworld-app enviado aparte en el archivo documentacion.docx

2.3. Ejecutar: "npm init"
2.4. Ejecutar: "npm install cypress --save-dev"
2.5. Ejecutar: "npx cypress open"
