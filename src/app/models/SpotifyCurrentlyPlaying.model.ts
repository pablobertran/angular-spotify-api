import {SpotifyContextModel} from './SpotifyContext.model';
import {SpotifyTrackModel} from './SpotifyTrack.model';
import {SpotifyEpisodeModel} from './SpotifyEpisode.model';

export interface SpotifyCurrentlyPlayingModel {
  context: SpotifyContextModel;
  currently_playing_type: string;
  is_playing: boolean;
  item: SpotifyTrackModel | SpotifyEpisodeModel;
  progress_ms: number;
  timestamp: number;
}
