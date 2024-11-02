import { Request, Response } from "express";
import AppResponse from "../../../utils/AppResponse";
import healthCheckService from "./health-check.service";

export default {
    healthCheck: async (req: Request, res: Response): Promise<void> => {
        const { message } = req.query;
        const response = await healthCheckService.healthCheck(message as string || 'Health Check');
        return new AppResponse(res).send({
            message: response
        });
    }
}
