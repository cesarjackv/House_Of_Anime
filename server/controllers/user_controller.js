const Authors = require('../models/author_model');

module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneAuthor = (req, res) => {
    Authors.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json({ author: oneAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewAuthor = (req, res) => {
    Authors.create(req.body)
        .then(newAuthor => res.json({ author: newAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateAuthor = (req, res) => {
    Authors.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}