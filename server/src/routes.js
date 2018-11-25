const AuthController = require('./controllers/AuthController')

module.exports = (app) => {
  app.post('/login', AuthController.login)
}
