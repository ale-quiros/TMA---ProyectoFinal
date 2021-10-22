Pasos para ejecutar el proyecto final:

1. Levantar el sitio cypress-realworld-app:

1.1. Clonar un repositorio de Github (https://github.com/Maximus1285/cypress-realworld-app)
1.2. Ejecutar "yarn install" 
1.3. Obtener username de prueba que sera utizado mas adelante en las variables de ambiente para poder ejecutar el proyecto:
    1.3.1. Si se esta trabajando en linux: Ejecutar "yarn list:dev:users" y seleccionar un username
    1.3.2. Si se esta trabajando en windows: Abrir el archivo data/database.json y seleccionar un username
1.4. Ejecutar "yarn dev"
--------------------------------------------------------------------------------------------------------

2. Ejecutar el proyecto:

2.1. Clonar el repositiorio del proyecto -> git clone https://github.com/ale-quiros/TMA---ProyectoFinal.git
2.2. Ir a la carpeta donde se clonó el proyecto (TMA---ProyectoFinal)
2.3  Abrir archivo cypress.env.json y agregar el username obtenido de la aplicacion "cypress-realworld-app" y el password del archivo adjunto (AntesDeEjecutar.docx)
    2.3.1. Reenplazar USUARIO_PRUEBA por el usuario de prueba obtenido anteriormente de la base de datos del proyecto realworld-app (1.3 - Paso 3)
    2.3.2. Reenplazar PASWORD por el password de prueba de los usuarios de la base de datos del proyecto realworld-app enviado aparte en el archivo AntesDeEjecutar.docx

2.4. Ejecucion del proyecto
2.4.1. En la consola ir a la carpeta donde se clono el proyecto (TMA---ProyectoFinal)
2.4.2. Ejecutar: "npm init" -> (presionar enter hasta terminar)
2.4.3. Ejecutar: "npm install cypress --save-dev"

2.5. Para ejecutar el proyecto se puede hacer con cualquiera de las siguientes tres opciones:
2.5.1. Opcion #1:  Abrir la ventana de Cypress 
Ejecutar: "npx cypress open"

2.5.2. Opcion #2: Ejecutar todo el proyecto desde consola
Ejecutar: "npx cypress run ejecutarapp"

2.5.3. Opcion #3: Ejecutar los scripts individualmente desde consola
Ejecutar: 'npx cypress run --spec "cypress/integration/authentication/login.spec.js"'
Ejecutar: 'npx cypress run --spec "cypress/integration/authentication/signup.specs.js"'
Ejecutar: 'npx cypress run --spec "cypress/integration/BankAccount/bankaccount.specs.js"'
Ejecutar: 'npx cypress run --spec "cypress/integration/transactions/addTransaction.specs.js"'
Ejecutar: 'npx cypress run --spec "cypress/integration/transactions/interactTransaction.specs.js"'