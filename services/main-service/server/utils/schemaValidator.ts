import Joi from "joi";

function schemaValidator(schema: Joi.ObjectSchema<any>, data: any) {
    const { error } = schema.validate(data);
    if (error) {
        throw error;
    }
}

export default schemaValidator;