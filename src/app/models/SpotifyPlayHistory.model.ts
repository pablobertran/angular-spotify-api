import {SpotifyContextModel} from './SpotifyContext.model';

export interface SpotifyPlayHistoryModel {
  context: SpotifyContextModel;
  played_at: number; // Timestamp
  track: any; // fix
}
