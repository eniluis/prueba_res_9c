const config = require('./configuracion');
const mongoose = require('mongoose');

module.exports = {
    connection: null,
    connect:()=>{
    if(this.connection) return this.connection;
    return mongoose.connect(config.DB)
    .then(conn => {
        this.connection = this.conn
        console.log('Conexion exitosa a la base de datos');
    })
    .catch(err => {console.log(`error en la conexion, ${err}`)});
    
    }
};