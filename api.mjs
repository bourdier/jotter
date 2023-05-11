import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import logSymbols from 'log-symbols';
import bodyParser from 'body-parser';
const app = express();
const port = 8080;
dotenv.config();

const mongo = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(mongo);

let col;

app.listen(port, () => {
  console.log(`${logSymbols.success} Listening on port ${port}`);
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

try {
    client.connect();
    let db = client.db(dbName);
    col = db.collection('jotter');
    console.log(`${logSymbols.success} Connected to MongoDB\n${logSymbols.info} ${await col.countDocuments({})} documents in collection`);
} catch (err) {
    console.log(`${logSymbols.error} ${err}`);
}

app.get('/', async (req, res) => {
    let data = await col.find({}).toArray();
    res.send(data);
});

app.post('/', async (req, res) => {
    let data = await col.insertOne(req.body);
    res.send(data);
});

app.delete('/', async (req, res) => {
    let data = await col.deleteOne(req.body);
    res.send(data);
});