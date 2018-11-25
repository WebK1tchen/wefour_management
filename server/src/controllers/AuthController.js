const { User } = require('../models')

module.exports = {
  async login (req, res) {
    try {
      User.findAll({
        where: {
          login: req.body.login,
          password: req.body.password
        }
      }).then(user => {
        if (user === '') {
          res.status(400).send({
            error: 'User not found or password incorrect!'
          })
        } else {
          res.status(200).send({
            message: 'Successfully authorized!'
          })
        }
      })
    } catch (err) {
      res.send(err)
    }
  }
}
