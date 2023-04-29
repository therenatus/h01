import { Request, Response } from 'express';
import { IVideo, IVideos } from '../types/videoType';

const data: IVideos = [
  {
    id: 'string2',
    title: 'string',
    author: 'string',
    canBeDownloaded: true,
    minAgeRestriction: 5,
    createdAt: 'string',
    publicationDate: 'string',
    availableResolution: ['P1080', 'P720', 'P480', 'P360', 'P240'],
  },
  {
    id: 'string3',
    title: 'string',
    author: 'string',
    canBeDownloaded: true,
    minAgeRestriction: 5,
    createdAt: 'string',
    publicationDate: 'string',
    availableResolution: ['P1080', 'P720', 'P480', 'P360', 'P240'],
  },
];

type Message = {
  message: string;
};

class VideosService {
  async getOne(req: Request, res: Response<IVideos>) {
    try {
      const id: string = req.params.id;
      const video: IVideo[] = data.filter((video) => video.id === id);
      if (!video.length) {
        res.status(404);
      }
      console.log(video);
      res.status(200).json(video);
    } catch (error) {
      console.log('Error');
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      console.log('Error');
    }
  }

  async create(req: Request, res: Response<IVideos | Message>) {
    try {
      const date = new Date();
      const video: IVideo = req.body;
      const id = Math.random().toString(36).substr(2, 9);
      video.createdAt = date.toISOString();
      video.canBeDownloaded = false;
      video.id = id;
      video.publicationDate = new Date(date.getTime() + 86400000).toISOString();
      const videos: IVideos = { ...data, ...video };
      return res.status(201).json({ message: 'Created' });
    } catch (error) {
      console.log(error);
      console.log('Error');
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      const videoId = data.findIndex((video) => video.id === req.params.id);
      const video = data[videoId];
      if (!video) {
        res.status(404).json('Not Found');
      }
      const updateVideo = { ...video, ...req.body };
      const newVideos = data.splice(videoId, 1, updateVideo);
      res.status(201).json(newVideos);
    } catch (error) {
      console.log('Error');
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      const videoId = data.findIndex((video) => video.id === req.params.id);
      const newVideo = data.splice(videoId, 1);
      res.status(204).json('Success');
    } catch (error) {
      console.log('Error');
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const empty = data.splice(0, data.length);
      res.status(204).json('All data is deleted');
    } catch (error) {
      console.log('Error');
    }
  }
}

export { VideosService };
