const moment = require('moment')

const nacimiento = moment('30061988', 'DD-MM-YYYY')

const hoy = 'hoy es ' + moment().format('DD-MM-YYYY')
const naci = 'naci el ' + nacimiento.format('DD-MM-YYYY')
const distanciaAños =
    'desde que naci pasaron ' + moment().diff(nacimiento, 'years') + ' años'
const distanciDías =
    'desde que naci pasaron ' +
    moment().diff(moment('30061988', 'DD-MM-YYYY'), 'days') +
    ' años'

console.log({
    hoy,
    naci,
    distanciaAños,
    distanciDías,
})
