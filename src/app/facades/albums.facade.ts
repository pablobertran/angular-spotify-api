import {Injectable} from '@angular/core';
import {SpotifyAlbumsRequest} from '../requests/spotify-albums.request';
import {Observable} from 'rxjs';
import {SpotifyAlbumModel} from '../models/SpotifyAlbum.model';
import {map} from 'rxjs/operators';
import {SpotifyTrackModel} from '../models/SpotifyTrack.model';

@Injectable()
export class AlbumsFacade {
  constructor(private request: SpotifyAlbumsRequest) {
  }

  query(): Observable<SpotifyAlbumModel[]> {
    return this.request.query().pipe(
      map( response => {
        return response.data;
      })
    );
  }

  get(id: string): Observable<SpotifyAlbumModel> {
    return this.request.get(id).pipe(
      map( response => {
        return response.data;
      })
    );
  }

  getTracks(id: string): Observable<SpotifyTrackModel[]> {
    return this.request.getTracks(id).pipe(
      map( response => {
        return response.data;
      })
    );
  }
}
