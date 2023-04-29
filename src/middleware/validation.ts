import { NextFunction, Request, Response } from 'express';
import {
  IsString,
  MaxLength,
  validateInt32,
  validateDateTime,
} from '../validation/validation';

export const CreateVideoValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, author } = req.body;
  let message: { message: string; field: string }[] = [];
  if (req.body) {
    if (!IsString(title) || !MaxLength(title, 40)) {
      message.push({
        message: 'Type of filed must be string or length is too long',
        field: 'title',
      });
    }
    if (!IsString(author) || !MaxLength(author, 20)) {
      message.push({
        message: 'Type of filed must be string or length is too long',
        field: 'author',
      });
    }
    if (message.length) {
      return res.status(400).json(message);
    }
  }
  next();
};

export const UpdateVideoValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, author, canBeDownloaded, minAgeRestriction, publicationDate } =
    req.body;
  let message: { message: string; field: string }[] = [];
  if (req.body) {
    if (!IsString(title) || !MaxLength(title, 40)) {
      message.push({
        message: 'Type of filed must be string or length is too long',
        field: 'title',
      });
    }
    if (!IsString(author) || !MaxLength(author, 20)) {
      message.push({
        message: 'Type of filed must be string or length is too long',
        field: 'author',
      });
    }
    if (!(typeof canBeDownloaded === 'boolean')) {
      message.push({
        message: 'Type of filed must be boolean',
        field: 'canBeDownloaded',
      });
    }
    if (!validateInt32(minAgeRestriction)) {
      message.push({
        message: 'Type of filed must be integer or age between 1 and 18',
        field: 'minAgeRestriction',
      });
    }
    if (!IsString(publicationDate) && !validateDateTime(publicationDate)) {
      message.push({
        message:
          'Type of date must be string and date format must be YYYY-MM-DDTHH:mm:ss.sssZ',
        field: 'publicationDate',
      });
    }
    if (message.length) {
      return res.status(400).json(message);
    }
  }
  next();
};
