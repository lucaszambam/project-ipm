import PrismaClientPkg from "@prisma/client";
import express from "express";
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

//Constantes
const PrismaClient = PrismaClientPkg.PrismaClient;
const prisma = new PrismaClient();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.use('/images', express.static('images'));

app.get('/api/noticias', async (req, res) => {
    const a = await prisma.noticia.findMany();
    a.map((e) => {
        e.image = 'http://'+req.get('host') + '/images/' + e.image;
    });
    res.send(a);
});

app.get('/api/noticias/:id', async (req, res) => {
    const users = await prisma.noticia.findUnique({ where: { codigo: parseInt(req.params.id) } });
    users.image = 'http://'+ req.get('host') + '/images/' + users.image;
    res.send(users);

});


//Inicializa Server
app.listen('80');


