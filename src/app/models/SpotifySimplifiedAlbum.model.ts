import {SpotifyImageModel} from './SpotifyImage.model';
import {SpotifySimplifiedArtistModel} from './SpotifySimplifiedArtist.model';
import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';

export interface SpotifySimplifiedAlbumModel {
  album_group: string;
  album_type: string;
  artists: SpotifySimplifiedArtistModel[];
  available_markets: string[];
  external_urls: SpotifyExternalUrlModel;
  href: string;
  id: string;
  images: SpotifyImageModel;
  name: string;
  type: string;
  uri: string;
}
