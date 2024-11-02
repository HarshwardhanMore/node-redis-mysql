import { Response } from "express";
import { StatusCodes } from "http-status-codes";

class AppResponse {

    private res: Response;
    constructor(res: Response) {
        this.res = res;
    }

    send(data: any) {
        this.res
            .status(StatusCodes.OK)
            .json({
                data,
            });
    }
}

export default AppResponse;