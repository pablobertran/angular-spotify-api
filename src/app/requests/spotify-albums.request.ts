import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';

@Injectable()
export class SpotifyAlbumsRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  query(): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/albums/`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  get(id: string, market?: string): Observable<SpotifyJsonResponseModel> {
    const params = market ? `?market=${market}` : null;
    const url = `${this.settings.getSetting('uri')}/albums/${id}${params}`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  getTracks(id: string, limit?: string, offset?: string, market?: string): Observable<SpotifyJsonResponseModel> {
    let params = [
      {label: 'limit', value: limit},
      {label: 'offset', value: offset},
      {label: 'market', value: market}
      ].filter( el => el.value != null);
    // params = params.reduce() // TODO -> build params string
    const url = `${this.settings.getSetting('uri')}/albums/${id}/tracks${params}`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }
}
