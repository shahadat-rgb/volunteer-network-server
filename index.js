const express = require('express')
// const bodyParser = require('body-parser');
// const cors = require('cors');
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_PASS}@cluster0.wawxe.mongodb.net/${process.env.DB_Name} ?retryWrites=true&w=majority`;

const app = express()
const port = 4000


const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology:true });
client.connect(err => {
  const collection = client.db("volunteerDashBord").collection("volunteer");
 console.log('database connected');
});


app.listen(port)