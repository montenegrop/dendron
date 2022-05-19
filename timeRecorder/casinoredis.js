import { createClient } from 'redis'

const user = 'lector'
const pass = 'Lectura2+'
const customUrl = `redis://${user}:${pass}@redis-19817.c17.us-east-1-4.ec2.cloud.redislabs.com:19817`
const client = createClient({
    url: customUrl,
})

// await client.connect()

// console.log('as')

// // await client.set('key2', 'value3')
// console.log('as2')
// const value = await client.get('hello')

export default client
