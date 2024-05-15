const express = require('express') //importamos el módulo de express
const bodyParser = require('body-parser') //interpreta los json desde el cliente rest
const mongoose = require('mongoose')
require('dotenv').config() // modulo encargado de leer las variables de entorno

const app = express() // instanciamos express

const PORT =  process.env.PORT || 4000 ; //asignación de puerto


//USA LA LECTURA DE LAS VARIABLES DE ENTORNO
app.use(bodyParser.json());


const urlMongo = 'mongodb+srv://localUser:Hn7DNKSfOGieCjey@dbcluster.zeqtt9c.mongodb.net/?retryWrites=true&w=majority&appName=dbCluster'

// CONEXIÓN A LA BD EN MONGO
mongoose.connect(urlMongo,{
    useNewUrlParser:true
})
.then (()=> console.log('Conexión exitosa a la BD'))
.catch((err)=> console.log(`Error al realizar la conxión ${err}`))


//#region Routes

// GET

app.get('/', (req, res) => {

    console.log(`Servidor corriendo. ESTÁS EN /`)
    res.send('Conexión exitosa al servidor')
})

app.get('/about', (req, res) => {
    console.log("Estás en /about")
    res.send('BIENVENIDO A ABOUT')
})

//POST

app.post('/', (req, res) => {

    // console.log(req.body)
    // console.log("Petición POST en ejecución...")
    //res.send('RUTA PARA ENVIAR DATOS')

    //Se declara un user para recibir el usuario desde rest
    const usuario = req.body
    res.json(
        {
            message: 'Petición ejecutandose...',
            nombre: usuario.nombre,
            apellido: usuario.apellido
    })
})

//PUT


//DELETE

app.delete('/', (req, res) => {
    console.log("Estás en /delete")
    res.send('RUTA PARA ELIMINAR')
})


// RECEPCIÓN  del puerto declarado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})      