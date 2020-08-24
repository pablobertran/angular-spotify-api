import {Injectable} from '@angular/core';
import {SpotifyRequest} from '../requests/spotify.request';

@Injectable()
export class PlaylistsFacade {
  constructor(private request: SpotifyRequest) {
  }
}
