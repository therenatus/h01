export type AvailableString =
  | 'P144'
  | 'P240'
  | 'P360'
  | 'P480'
  | 'P720'
  | 'P1080'
  | 'P1440'
  | 'P216';

export interface IVideo {
  id: string;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  createdAt: string;
  publicationDate: string;
  availableResolution: AvailableString[];
}

export type IVideos = IVideo[] | [];
