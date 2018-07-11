// server.js

const express = require('express');
const app = express();
const elasticsearch = require('elasticsearch');
const console = require('tracer').console();
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 5000 );
app.use(cors());
app.use(bodyParser.json());


//how to connect to the elasticsearch server client
const client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

client.ping({ requestTimeout: 30000 }, function(error) {
    if (error) {
        console.error('Elasticsearch is not responding as expected!');
    } else {
        console.log('Elasticsearch is responding as expected!');
    }
});



app.listen(app.get('port'), function() {
    console.log('Node.js server is running on PORT: ',app.get('port'));
});