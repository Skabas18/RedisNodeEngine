import 'dotenv/config';
import redis from 'redis';


const redisClient = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    },
    password: process.env.REDIS_PASSWORD,
});

redisClient.connect()
    .then(() => console.log('Estas conectado a Redis'))
    .catch(error => console.error('Error de conexion a Redis', error));

export default redisClient;