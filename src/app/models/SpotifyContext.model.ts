import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';

export interface SpotifyContextModel {
  external_urls: SpotifyExternalUrlModel;
  href: string;
  type: string;
  uri: string;
}
