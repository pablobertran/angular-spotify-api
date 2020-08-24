import {ReleaseDatePrecision} from '../common/enums';

export interface SpotifyEpisodeModel {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: any; // fix
  href: string;
  id: string;
  images: any[]; // fix
  is_externally_hosted: boolean;
  is_playable: boolean;
  language?: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  resume_point: any; // fix
  show: any; // fix
  type: string;
  uri: string;
}
