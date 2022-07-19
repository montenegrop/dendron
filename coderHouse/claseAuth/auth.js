const express = require("express")
const session = require("express-session") 

app.use(session({
    secret: 'fahrenheit',
    resave: true,
    saveUninitialized: true
  }))


const users = [];

router.post('/register', (req, res) => {

    const { username, password } = req.body;

    const found = users.find(elem => elem.username === username);

    if (found) {
        res.json({Error: 'Ese usuario ya existe, elegí otro nombre'})
    } else {
        users.push({username: username, password: password})
        res.send('Registro exitoso')
    }   
})

router.get('/data', (req, res) => {

    if (req.session.username) {
        return res.send(`Nombre de usuario: ${req.session.username}`)
    } else {
        res.send('Debes estar logueado para acceder a tus datos')
    }
})

router.post('/login', (req, res) => {
   
    const { username, password } = req.body

    const found = users.find(elem => {
        elem === {username: username, password: password}
    });

    if (found) {
        req.session.username = username;
        // redirect a /data
    } else {
        res.json({Error: 'Usuario o contraseña inválidos'})
    }
})


router.get('/logout', (req, res) => {

    return req.session.destroy(err => {
        if (!err) {
            return res.send('Logout successfull')
        }
        return res.send({ error: err })
        }) 
   })

app.use('/api', router);

