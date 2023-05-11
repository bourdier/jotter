import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import logSymbols from 'log-symbols';
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