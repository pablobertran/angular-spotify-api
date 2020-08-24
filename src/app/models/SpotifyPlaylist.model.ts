export interface SpotifyPlaylistModel {
  collaborative: boolean;
  external_urls: any; // fix
  href: string;
  id: string;
  images: any[]; // fix
  name: string;
  owner: any; // fix
  public: boolean;
  snapshot_id: string;
  tracks: any; // fix
  type: string;
  uri: string;
}
