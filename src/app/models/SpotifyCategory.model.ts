import {SpotifyImageModel} from './SpotifyImage.model';

export interface SpotifyCategoryModel {
  href: string;
  icons: SpotifyImageModel[];
  id: string;
  name: string;
}
