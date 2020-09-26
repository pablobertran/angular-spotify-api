import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyShowsRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  getShows(ids: string,
           market: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/shows/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        ids,
        market
      }
    });
  }

  getShow(id: string,
          market: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/shows/${id}`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        market
      }
    });
  }

  getEpisodes(id: string,
              market: string,
              limit: number,
              offset: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/shows/${id}/episodes`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        market,
        limit,
        offset
      }
    });
  }
}
