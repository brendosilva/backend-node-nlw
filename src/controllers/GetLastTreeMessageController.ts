import {Request, Response } from "express";
import { GetLastTreeMessageService } from "../service/GetLastTreeMessageService";

class GetLastTreeMessageController {
  async handle(request: Request, response: Response) {
    const service = new GetLastTreeMessageService();
    const result = await service.execute();
    return response.json(result)
  }
}

export { GetLastTreeMessageController }