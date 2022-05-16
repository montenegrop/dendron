const express = require('express')

const app = express()
1
// app.use(express.static('public'))

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('puerto', PORT)
})

server.on('error', (error) => console.log('error', error))

app.use('/static', express.static(__dirname + '/public'))
