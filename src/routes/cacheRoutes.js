import express from 'express';
import { setCacheValue, getCacheValue, deleteCacheValue, incrementValue } from '../controllers/cacheController.js'

const router = express.Router();

router.post('/cache', setCacheValue);
router.get('/cache/:key', getCacheValue);
router.delete('/cache/:key', deleteCacheValue);
router.post('/cache/increment', incrementValue);

export default router;