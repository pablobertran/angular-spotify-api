import {SpotifySimplifiedShowModel} from './SpotifySimplifiedShow.model';

export interface SpotifySavedShowModel {
  added_at: number; // Timestamp
  show: SpotifySimplifiedShowModel;
}
