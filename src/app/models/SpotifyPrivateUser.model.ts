import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyFollowersModel} from './SpotifyFollowers.model';
import {SpotifyImageModel} from './SpotifyImage.model';

export interface SpotifyPrivateUserModel {
  country: string;
  display_name: string;
  email: string;
  external_urls: SpotifyExternalUrlModel;
  followers: SpotifyFollowersModel;
  href: string;
  id: string;
  images: SpotifyImageModel[];
  product: string;
  type: string;
  uri: string;
}
