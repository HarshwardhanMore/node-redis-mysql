import { Router } from "express";
import healthCheckController from "./health-check.controller";
import healthCheckValidation from "./health-check.validation";

const router = Router();

router
    .route('/v1/health-check')
    .get(
        healthCheckValidation.healthCheck,
        healthCheckController.healthCheck,
    );

export default router;