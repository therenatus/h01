import { Request, Response } from "express";
import { IVideo, IVideos } from "../types/videoType";

const data: IVideo[] = [];

type Message = {
  message: string;
};

class VideosService {
  async getOne(req: Request, res: Response<IVideo>): Promise<Response<IVideo>> {
    try {
      const video: IVideo[] = data.filter(
        (video) => video.id === +req.params.id
      );
      if (!video.length) {
        return res.status(404).send();
      }
      return res.status(200).send(video[0]);
    } catch (error) {
      return res.status(500).send();
    }
  }

  async getAll(
    req: Request,
    res: Response<IVideo[]>
  ): Promise<Response<IVideo[]>> {
    try {
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send();
    }
  }

  async create(
    req: Request,
    res: Response<IVideo | Message>
  ): Promise<Response<IVideo | Message>> {
    try {
      const date = new Date();
      const video: IVideo = req.body;
      const id = +new Date();
      video.createdAt = date.toISOString();
      video.canBeDownloaded = true;
      video.minAgeRestriction = null;
      video.id = id;
      video.publicationDate = new Date(date.getTime() + 86400000).toISOString();
      data.push(video);
      return res.status(201).send(video);
    } catch (error) {
      return res.status(500).send();
    }
  }

  async updateOne(
    req: Request,
    res: Response<IVideo>
  ): Promise<Response<IVideo>> {
    try {
      const videoId = data.findIndex((video) => video.id === +req.params.id);
      const video = data[videoId];
      if (!video) {
        return res.status(404).send();
      }
      const updateVideo = { ...video, ...req.body };
      data.splice(videoId, 1, updateVideo);
      return res.status(201).send(updateVideo);
    } catch (error) {
      return res.status(500).send();
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      const videoId = data.findIndex((video) => video.id === +req.params.id);
      if (!videoId) {
        return res.status(404).send("Not Found");
      }
      data.splice(videoId, 1);
      return res.status(204).send("Success");
    } catch (error) {
      return res.status(500).send();
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      data.splice(0, data.length);
      return res.status(204).send("All data is deleted");
    } catch (error) {
      return res.status(500).send();
    }
  }
}

export { VideosService };
