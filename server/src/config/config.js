module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'wefour',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  }
}
