const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

// check if the connection is ready
mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
});

// check if the connection is not ready
mongoose.connection.on('error', (err) => {
    console.error('Error: ', err)
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}