const User = require('../models').User;

module.exports = {
    list(req, res) {
        return User
            .findAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return User
            .find({
                where: {
                    userID: req.params.id
                }
            })
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return User
            .create({
                userID: req.body.userID,
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address
            })
            .then((user) => res.status(200).send(user))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return User
            .find({
                where: {
                    userID: req.body.userID
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .update({
                        name: req.body.name,
                        email: req.body.email,
                        phoneNumber: req.body.phoneNumber,
                        address: req.body.address
                    })
                    .then(() => res.status(200).send(user))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return User
            .find({
                where: {
                    userID: req.params.id
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
};