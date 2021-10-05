import { Response } from "express"

export class MakeResponse {

    private res: Response;

    constructor(res: Response) {
        this.res = res
    }
    ok(data: any, message: string = 'Success') {
        return this.res.status(200).json({
            message,
            data
        })
    }

    inserted(data: any, message: string = 'Success') {
        return this.res.status(201).json({
            message,
            data
        })
    }

    notFound(data: any = [], message: string = 'Not Found') {
        return this.res.status(404).json({
            message,
            data
        })
    }

    error(data: any, message: string = 'Error') {
        return this.res.status(500).json({
            message,
            data
        })
    }
}