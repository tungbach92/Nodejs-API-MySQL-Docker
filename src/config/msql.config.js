const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

dotenv.config()

//pool of connections, grap a connection every time having a request, connect go back to the pool
const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
})

module.exports = mysqlPool