const express = require('express');
const app = express();
const authRouter = require('./Routes/authRouter')
const placesRouter = require('./Routes/places')
const cors = require('cors');
const DatabaseConnector = require('./Models/DatabaseConnector')


const corsOption = {
    origin: [
      'http://localhost:5000',
      'http://localhost:3000',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,FETCH',
    allowedHeaders: [
      'Content-Type',
      'Accept',
      'access-control-allow-credentials',
      'X-Requested-With',
      'X-HTTP-Method-Override',
      'authorization',
    ],
    credentials: true,
  };
  
app.use(cors(corsOption))

app.use(express.json())

app.use('/api/places', placesRouter)

app.use('/api/auth', authRouter)

app.use((req, res)=>{
    res.status(500).json({error: "No route found" })
})




async function start(){
  try{
    const database = new DatabaseConnector()
    await database.connect()

    const PORT = 3000
    app.listen(PORT, () =>{
      console.log('Server started on port 3000')
    })
    
  }catch(err){
      console.log("Failed to start the sever : ",err)
  }
}


start()