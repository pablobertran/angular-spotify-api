import {ToneKey} from '../common/enums';

export interface SpotifyTuneableTrackModel {
  acousticness: number;
  danceability: number;
  duration_ms: number;
  energy: number;
  instrumentalness: number;
  key: ToneKey;
  liveness: number;
  loudness: number;
  mode: number;
  popularity: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  valence: number;
}
