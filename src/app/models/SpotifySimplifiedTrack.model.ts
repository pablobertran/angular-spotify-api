import {SpotifySimplifiedArtistModel} from './SpotifySimplifiedArtist.model';
import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyLinkedTrackModel} from './SpotifyLinkedTrack.model';

export interface SpotifySimplifiedTrackModel {
  artists: SpotifySimplifiedArtistModel[]; // fix
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrlModel;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: SpotifyLinkedTrackModel;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
