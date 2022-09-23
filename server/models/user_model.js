const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const pwComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, 'First Name is required'],
        minLength: [3, 'First Name must be at least 3 characters or more.']
    },
    lastName: {
        type: String, 
        required: [true, 'Last Name is required'],
        minLength: [3, 'Last Name must be at least 3 characters or more.']
    },
    email: {
        type: String, 
        required: [true, 'Email is required'],
        minLength: [3, 'Email must be at least 3 characters or more.']
    },
    password: {
        type: String, 
        required: [true, 'Password is required'],
        minLength: [8, 'Password must be at least 8 characters or more.']
    },
    favorites: {type: Array},
    watchlist: {type: Array},
    watched: {type: Array}
});

userSchema.methods.generateAuthToken =  function () {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, { expiresIn: '7d'});
    return token
};

module.exports.User = mongoose.model('user', userSchema);

module.exports.validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: pwComplexity().required().label("Password")
    });
    return schema.validate(data)
}

