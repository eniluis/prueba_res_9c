const CONFIG = require('./app/config/configuracion')
const conexion = require('./app/config/conexion')
const app = require('./app/app')
conexion.connect()

app.listen(CONFIG.PORT, () => {
    console.log(`App corriendo en puerto:${CONFIG.PORT}`)
})
