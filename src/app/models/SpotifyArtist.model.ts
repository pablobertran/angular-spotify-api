import {SpotifyFollowersModel} from './SpotifyFollowers.model';
import {SpotifyImageModel} from './SpotifyImage.model';

export interface SpotifyArtistModel {
  external_urls: any;
  followers: SpotifyFollowersModel;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImageModel[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
