import {SpotifyAlbumModel} from './SpotifyAlbum.model';

export interface SpotifySavedAlbumModel {
  added_at: number; // Timestamp
  album: SpotifyAlbumModel;
}
