const express = require('express');
const app = express();
var port = normalizePort(process.env.PORT);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

/*const MongoClient = require('mongodb').MongoClient;
const url = URL;

MongoClient.connect(url, function (err, client) {
    console.log('Connecté à MongoDB');
    client.db('MongoDB');
    client.close();
});*/

app.get('/', (req, res) => { 
    res.send('hello world');
});

app.post('/', (req, res) => { 
    res.send('reçu');
});

app.listen(port, () => { 
    console.log(`Écoute du server sur le port: ${port}`);
});
