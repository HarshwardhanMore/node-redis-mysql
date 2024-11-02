import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import schemaValidator from "../../../utils/schemaValidator";

const schemas = {
    healthCheck: Joi.object({
        message: Joi.string().required().min(3)
    }),
}

export default {
    healthCheck: (req: Request, res: Response, next: NextFunction) => {
        schemaValidator(schemas.healthCheck, req.query);
        next();
    }
};
