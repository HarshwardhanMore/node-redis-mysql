import { Router } from "express";
import healthCheckV1 from './health-check/v1'
const router = Router();

router.use('/', healthCheckV1);

export default router;