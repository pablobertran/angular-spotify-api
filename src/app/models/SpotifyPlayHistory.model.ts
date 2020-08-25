import {SpotifyContextModel} from './SpotifyContext.model';
import {SpotifySimplifiedTrackModel} from './SpotifySimplifiedTrack.model';

export interface SpotifyPlayHistoryModel {
  context: SpotifyContextModel;
  played_at: number; // Timestamp
  track: SpotifySimplifiedTrackModel;
}
