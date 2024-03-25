const mongoose = require('mongoose')
require('dotenv').config()

class DatabaseConnector{
    
    constructor() {
        this.databaseURL = process.env.MONGOOSE_URL
    }

    async connect() {
        await mongoose.connect(this.databaseURL, { 
            useUnifiedTopology: true,
            useNewUrlParser: true 
        })
        console.log('Database connected successfully!!!');
    }

    async close(){
        await mongoose.connection.close()
    }
}

module.exports = DatabaseConnector