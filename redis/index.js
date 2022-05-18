import { createClient } from 'redis'

const format = 'redis[s]://[[username][:password]@][host][:port][/db-number]'
const example = 'redis://alice:foobared@awesome.redis.server:6380'

const url = 'redis-19817.c17.us-east-1-4.ec2.cloud.redislabs.com:19817'
const host = 'redis-19817.c17.us-east-1-4.ec2.cloud.redislabs.com'
const user = 'lector'
const pass = 'Lectura1+'

const customUrl =
    'redis://lector:Lectura2+@redis-19817.c17.us-east-1-4.ec2.cloud.redislabs.com:19817'

const client = createClient({
    url: customUrl,
})

await client.connect()

console.log('as')

// client.on('error', (err) => console.log('Redis Client Error', err))

// await client.set('key2', 'value3')
console.log('as2')
const value = await client.get('hello')

console.log(value)
