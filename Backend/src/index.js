const app = require('./app')
//import './database'

const {getConfig} = require('./config');

const conf = getConfig()

const port = conf.conection.PORT;

app.listen(
    port,
    () => {
        console.log(`Server online, http://localhost:${port}`)
    }
)
