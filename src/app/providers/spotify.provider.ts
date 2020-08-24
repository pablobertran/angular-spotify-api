import {Injectable} from '@angular/core';
import {PlaylistsFacade} from '../facades/playlists.facade';

@Injectable()
export class SpotifyProvider {
  constructor(private facade: PlaylistsFacade) {
  }
}
