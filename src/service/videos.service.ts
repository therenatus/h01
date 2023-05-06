import { Request, Response } from "express";
import { IVideo } from "../types/videoType";

const data: IVideo[] = [];

type Message = {
  message: string;
};

class VideosService {
  async getOne(req: Request, res: Response<IVideo>): Promise<Response<IVideo>> {
    const video: IVideo[] = data.filter((video) => video.id === +req.params.id);
    if (!video.length) {
      return res.status(404).send();
    }
    return res.status(200).send(video[0]);
  }

  async getAll(
    req: Request,
    res: Response<IVideo[]>
  ): Promise<Response<IVideo[]>> {
    return res.status(200).send(data);
  }

  async create(
    req: Request,
    res: Response<IVideo | Message>
  ): Promise<Response<IVideo | Message>> {
    const date = new Date();
    const video: IVideo = req.body;
    const id = +new Date();
    video.createdAt = date.toISOString();
    video.canBeDownloaded = false;
    video.minAgeRestriction = null;
    video.id = id;
    video.publicationDate = new Date(date.getTime() + 86400000).toISOString();
    data.push(video);
    return res.status(204).send(video);
  }

  async updateOne(req: Request, res: Response) {
    const video = data.find((video) => video.id === +req.params.id);
    if (video) {
      Object.assign(video, req.body);
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  }

  async deleteOne(req: Request, res: Response) {
    const newVideos = data.filter((video) => video.id !== +req.params.id);

    if (data.length > newVideos.length) {
      res.send(204);
    }
    res.send(404);
  }

  async deleteAll(req: Request, res: Response) {
    data.splice(0, data.length);
    return res.status(204);
  }
}

export { VideosService };
