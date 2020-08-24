import {SpotifyExternalIdModel} from './SpotifyExternalId.model';

export interface SpotifyAlbumModel {
  album_type: string;
  artists: any[]; // fix
  available_markets: string[];
  copyrights: any[]; // fix
  external_ids: Array<SpotifyExternalIdModel>;
  genres: string[];
  href: string;
  id: string;
  images: any[]; // fix
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: any[]; // fix
  type: string;
  uri: string;
}
