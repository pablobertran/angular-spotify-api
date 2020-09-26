import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifySearchRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  searchItem(q: string,
             type: string,
             market?: string,
             limit?: number,
             offset?: number,
             includeExternal?: string): Observable<SpotifyJsonResponseModel> {
    const params = new HttpParams()
      .set('q', q)
      .set('type', type)
      .set('market', market)
      .set('limit', limit)
      .set('offset', offset)
      .set('include_external', includeExternal);
    const url = `${this.settings.getSetting('uri')}/search/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }
}
