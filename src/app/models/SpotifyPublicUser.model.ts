import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyFollowersModel} from './SpotifyFollowers.model';
import {SpotifyImageModel} from './SpotifyImage.model';

export interface SpotifyPublicUserModel {
  display_name: string;
  external_urls: SpotifyExternalUrlModel;
  followers: SpotifyFollowersModel;
  href: string;
  id: string;
  images: SpotifyImageModel[];
  type: string;
  uri: string;
}
