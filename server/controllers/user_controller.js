const { User } = require("../models/user_model");

module.exports.findFavorites = (req, res) => {
    User.find({})
        .then(favorites => res.json({ User: favorites }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneUser => res.json({ User: oneUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json({ User: newUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ User: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}