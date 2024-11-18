import 'dotenv/config';
import express from 'express';
import cacheRoutes from './routes/cacheRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', cacheRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http:localhost:${PORT}`)
});