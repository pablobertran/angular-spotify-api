import {SpotifyTrackModel} from './SpotifyTrack.model';

export interface SpotifySavedTrackModel {
  added_at: number; // Timestamp
  track: SpotifyTrackModel;
}
