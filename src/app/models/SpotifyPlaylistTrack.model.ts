import {SpotifyPublicUserModel} from './SpotifyPublicUser.model';
import {SpotifyTrackModel} from './SpotifyTrack.model';
import {SpotifyEpisodeModel} from './SpotifyEpisode.model';

export interface SpotifyPlaylistTrackModel {
  added_at: number; // Timestamp
  added_by: SpotifyPublicUserModel;
  is_local: boolean;
  track: SpotifyTrackModel | SpotifyEpisodeModel;
}
