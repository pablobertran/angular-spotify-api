import {SpotifyContextModel} from './SpotifyContext.model';

export interface SpotifyCurrentlyPlayingModel {
  context: SpotifyContextModel;
  currently_playing_type: string;
  is_playing: boolean;
  item: any; // fix
  progress_ms: number;
  timestamp: number;
}
