const mongoose = require('mongoose')

const mongoConnect = mongoose.connect(
  process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
)
.then(() => console.log('Mongoose OK'))
.catch((e) => console.log('Mongoose SOME TROOUBLE ', e))

module.exports = mongoConnect
