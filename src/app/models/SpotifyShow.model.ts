import {SpotifyCopyrightModel} from './SpotifyCopyright.model';
import {SpotifySimplifiedEpisodeModel} from './SpotifySimplifiedEpisode.model';
import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyImageModel} from './SpotifyImage.model';

export interface SpotifyShowModel {
  available_markets: string[];
  copyrights: SpotifyCopyrightModel[];
  description: string;
  episodes: SpotifySimplifiedEpisodeModel[];
  explicit: boolean;
  external_urls: SpotifyExternalUrlModel;
  href: string;
  id: string;
  images: SpotifyImageModel[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: string;
  uri: string;
}
