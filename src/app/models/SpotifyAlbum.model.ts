import {SpotifyExternalIdModel} from './SpotifyExternalId.model';
import {SpotifyArtistModel} from './SpotifyArtist.model';
import {SpotifyCopyrightModel} from './SpotifyCopyright.model';
import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyImageModel} from './SpotifyImage.model';
import {SpotifySimplifiedTrackModel} from './SpotifySimplifiedTrack.model';

export interface SpotifyAlbumModel {
  album_type: string;
  artists: SpotifyArtistModel[];
  available_markets: string[];
  copyrights: SpotifyCopyrightModel[];
  external_ids: SpotifyExternalIdModel[];
  external_urls: SpotifyExternalUrlModel[];
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImageModel[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: SpotifySimplifiedTrackModel[];
  type: string;
  uri: string;
}
