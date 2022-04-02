import { Request, Response } from "express";


const CarController = {

    async index(request: Request, response: Response): Promise<Response> {

        return response.json({ message: "Wello Word" })


    }
}

export default CarController





