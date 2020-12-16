import {Favourite} from '../shared/favourites/favourite';

export interface Workspaceposter{
  XPos: number;
  YPos: number;
  PosterId: number;
  FrameId: number;
  SizeId: number;
  favourite: Favourite;
  selected?: boolean;
}
