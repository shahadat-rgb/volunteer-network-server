const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wawxe.mongodb.net/${process.env.DB_NAME} ?retryWrites=true&w=majority`;

const app = express()

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
     res.send('hello from db its working mong')
})


const port = 4000



const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology:true });
client.connect(err => {
  const registeredEvents= client.db("volunteerDashBord").collection("register");

app.post('/submit-aria', (req,res) =>{

   registeredEvents.insertOne(req.body)
   .then(result =>{
       res.send(result.insertedCount > 0)
   })
} )


});



app.listen(process.env.PORT || port)
