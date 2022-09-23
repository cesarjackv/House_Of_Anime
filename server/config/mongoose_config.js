const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.DB)
        console.log('Connection to database sucessfully!')
    } catch (error) {
        console.log(error)
        console.log('Could not connect to database.')
    }
};