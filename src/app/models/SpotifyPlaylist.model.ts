import {SpotifyImageModel} from './SpotifyImage.model';
import {SpotifyExternalUrlModel} from './SpotifyExternalUrl.model';
import {SpotifyPublicUserModel} from './SpotifyPublicUser.model';
import {SpotifyPlaylistTrackModel} from './SpotifyPlaylistTrack.model';

export interface SpotifyPlaylistModel {
  collaborative: boolean;
  external_urls: SpotifyExternalUrlModel;
  href: string;
  id: string;
  images: SpotifyImageModel[];
  name: string;
  owner: SpotifyPublicUserModel;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyPlaylistTrackModel;
  type: string;
  uri: string;
}
