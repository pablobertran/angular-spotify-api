import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';
import {ParseArgumentException} from '@angular/cli/models/parser';

const validTypes = [
  'artists',
  'tracks'
];

@Injectable()
export class SpotifyPersonalizationRequests {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  getCurrentUserSavedAlbums(types: string, time_range?: string, limit?: number, offset?: number): Observable<SpotifyJsonResponseModel> {
    if (validTypes.indexOf(types) === -1) {
      throw {message: 'Invalid types value provided!', params: {types} }; // TODO -> Create exception functions
    }
    const url = `${this.settings.getSetting('uri')}/me/top/type/`;
    const params = new HttpParams();
    params.set('types', types + '');
    params.set('limit', limit + '');
    params.set('offset', offset + '');
    params.set('time_range', time_range);
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }
}
