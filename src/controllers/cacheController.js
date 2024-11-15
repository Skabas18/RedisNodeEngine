import redisClient from "../config/redis";

//Guardar un valor de Redis
exports.setCacheValue = async (req, res) => {
    const { key, value } = req.body;
    await redisClient.set(key, value);
    res.json({ message: `Valor guardado con clave ${key}` });
}

//Obtener un valor de Redis
exports.getCacheValue = async (req, res) => {
    const { key } = req.params;
    const value = await redisClient.get(key);
    if (!value) res.status(404).json({ message: 'Clave no encontrada' })
    res.json({ key, value });
}

//Eliminar un valor de Redis
exports.deleteCacheValue = async (req, res) => {
    const { key } = req.params;
    await redisClient.del(key);
    res.json({ message: `Clave ${key} eliminada` });
}

//Incrementar un valor en Redis
exports.incrementValue = async (req, res) => {
    const { key } = req.body;
    const value = await redisClient.incr(key);
    res.json({ key, value });
}