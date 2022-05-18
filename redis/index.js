import { createClient } from 'redis'

const client = createClient({
    url: 'redis-19817.c17.us-east-1-4.ec2.cloud.redislabs.com:19817',
    password: 'nC6WdDnB2YPe4VVEUfHmIY5JCmESFgir',
})

// client.on('error', (err) => console.log('Redis Client Error', err))

// await client.connect()

// await client.set('key', 'value')
// const value = await client.get('key')
