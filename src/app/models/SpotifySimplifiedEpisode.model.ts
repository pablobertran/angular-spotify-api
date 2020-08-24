import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyImageModel} from './SpotifyImage.model';
import {ReleaseDatePrecision} from '../common/enums';
import {SpotifyResumePointModel} from './SpotifyResumePoint.model';

export interface SpotifySimplifiedEpisodeModel {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrlModel;
  href: string;
  id: string;
  images: SpotifyImageModel[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language?: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  resume_point: SpotifyResumePointModel;
  type: string;
  uri: string;
}
