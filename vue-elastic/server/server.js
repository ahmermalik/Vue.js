// server.js

const express = require('express');
const app = express();
const elasticsearch = require('elasticsearch');
const fs = require('fs');

const PORT = 5000;


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

app.listen(PORT, function() {
    console.log('Listening on port: ',PORT);
});

