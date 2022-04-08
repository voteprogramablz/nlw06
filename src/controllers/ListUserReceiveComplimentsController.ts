import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listReceiveComplimentsService =
      new ListUserReceiveComplimentsService();

    const compliments = await listReceiveComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };
