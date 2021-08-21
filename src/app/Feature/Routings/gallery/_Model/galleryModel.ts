export interface I_Gallery {
  id: number;
  Name: string;
  url: string;
  Source: 'FaceBook' | 'Twitter' | 'Google' | 'Other';
  NoComments: number;
  NoLikes: number;
}
