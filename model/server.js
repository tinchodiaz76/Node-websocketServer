const express = require('express');
const cors = require('cors')

require('dotenv').config();
const {socketController}= require('../sockets/controller');

class Server{
    
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths= { 
            raiz :'/'
        }
        
       
        //Conectar a la BD
        //this.conectarDB();

        //Middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();

        this.sockets();

    }

    middlewares(){

        this.app.use(cors());

        //Lectura y Parseo del body
        //this.app.use(express.json());   //Cualquier info que venga la va a tratar de serializar en formato JSON


        //Directorio Publico
        this.app.use(express.static('public'));     //Directorio publico, entonces va y busca el archivo index.html.

        /*
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
        */
    }


    routes()
    {
        this.app.use(this.paths.raiz, function (req, res) {
            res.send('Hello World')
          })
/*          
        this.app.use(this.paths.auth,require('../routes/auth'));

        this.app.use(this.paths.buscar, require('../routes/buscar'));

        this.app.use(this.paths.categorias, require('../routes/categorias'));

        this.app.use(this.paths.productos, require('../routes/productos'));

        this.app.use(this.paths.uploads, require('../routes/uploads'));

        this.app.get('*', (req, res) => {
            res.sendFile('404.html', {root: 'C:/Workspace/Node-restServer/' + '/public'});
        })
*/
    }

    sockets(){
        this.io.on('connection', socketController);

    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports=Server;