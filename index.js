

const express = require("express");
const cors = require("cors"); //cors crossorigin
const db = require("./data/db.js")
const path = require("path");

//Importamos archivo de rutas centralizadas
const routes = require('./routes/routes.js');

const app = express();
const port = 3030;

//importamos asociaciones del modelo
const defineAssociations  = require("./models/associations.js");
defineAssociations(); // llamamos a la funcion para definir las asociaciones


app.use(cors()) //habilitamos el intercambio de informacion
app.use(express.json()); // analizo los requests con JSON


//Servir archivos estaticos desde la carpeta Front
app.use(express.static(path.join(__dirname, 'FRONT')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'FRONT', 'index.html'));
});

//usamos las rutas centralizadas
app.use("/northwind", routes);


//conexion a la base de datos

const connectionDB = async()=>{
    try{
        await db.authenticate()
        console.log("Conectado Ok a la Base de Datos");
    }catch(error){
        console.log(`Error: ${error}`);
    }
}
//Iniciar el servidor
app.listen(port, () => {
    connectionDB();
    console.log(`Servidor Ok en el puerto ${port}`);
})


