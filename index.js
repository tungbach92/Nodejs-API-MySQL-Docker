const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const ip = require('ip')
const Response = require('./domain/response')


dotenv.config()
const PORT = process.env.SERVER_PORT || 3333
const app = express()
app.use(cors({
    origin: "*",
}))
app.use(express.json())
app.get("/", (req, res) => {
    res.send( new Response(200, 'OK', 'OK'))
})
console.log(process.env)
app.listen(PORT, () => {
    console.log(`server running on ${process.env.NODE_ENV} environment`)
    console.log(`server listening on port ${ip.address()}:${PORT}`)
})