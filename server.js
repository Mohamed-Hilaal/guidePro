const express = require('express');
const app = express();
const authRouter = require('./Routes/authRouter')

app.get('/', (req, res) => {
    res.send('Start Travelling')
})

app.use('/api/auth', authRouter)

app.use((req, res)=>{
    res.send("No Traveler Found")
})

// app.listen(3000, () =>{
//     console.log('Server started on port 3000')
// })