import {SpotifySimplifiedAlbumModel} from './SpotifySimplifiedAlbum.model';
import {SpotifyArtistModel} from './SpotifyArtist.model';
import {SpotifyExternalIdModel} from './SpotifyExternalId.model';
import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyLinkedTrackModel} from './SpotifyLinkedTrack.model';
import {SpotifyTrackRestrictionModel} from './SpotifyTrackRestriction.model';

export interface SpotifyTrackModel {
  album: SpotifySimplifiedAlbumModel;
  artists: SpotifyArtistModel[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SpotifyExternalIdModel;
  external_urls: SpotifyExternalUrlModel;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: SpotifyLinkedTrackModel;
  name: string;
  popularity: number;
  preview_url: string;
  restrictions: SpotifyTrackRestrictionModel[];
  track_number: number;
  type: string;
  uri: string;
}
