const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

UserSchema.pre('save', async function (next) {
    console.log('prepare for saving')
  })


  UserSchema.post('save', async function (next) {
    console.log('saved!!')
  })

const User = mongoose.model('User', UserSchema)

module.exports = User