import { Request, Response } from "express";
import { IVideo } from "../types/videoType";

const data: IVideo[] = [];

type Message = {
  message: string;
};

class VideosServiceTest {
  async deleteAll(req: Request, res: Response) {
    data.splice(0, data.length);
    res.status(204).send();
  }
}

export { VideosServiceTest };
