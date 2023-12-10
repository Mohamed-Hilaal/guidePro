const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("REQUEST: ", req.params)
    res.send('Travel without planning')
})

app.listen(3000, () =>{
    console.log('Server started on port 3000')
})