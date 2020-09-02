import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';

@Injectable()
export class SpotifyAlbumsRequest {
  private baseURL: string;
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
    this.baseURL = `${this.settings.getSetting('uri')}/albums/`;
  }

  query(): Observable<SpotifyJsonResponseModel> {
    return this.http.get<SpotifyJsonResponseModel>(this.baseURL);
  }

  get(id: string, market?: string): Observable<SpotifyJsonResponseModel> {
    const params = market ? `?market=${market}` : null;
    const url = `${this.baseURL}${id}${params}`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  getTracks(id: string, limit?: string, offset?: string, market?: string): Observable<SpotifyJsonResponseModel> {
    const params = [
      {label: 'limit', value: limit},
      {label: 'offset', value: offset},
      {label: 'market', value: market}
      ].filter( el => el.value != null).reduce((a, b) => {
      return a + b.label + '=' + b.value;
    }, '?');
    const url = `${this.baseURL}${id}/tracks${params}`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }
}
