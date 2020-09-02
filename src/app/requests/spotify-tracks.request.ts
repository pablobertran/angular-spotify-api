import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyTracksRequest {
  private baseURL: string;
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
    this.baseURL = `${this.settings.getSetting('uri')}/tracks/`;
  }

  query(ids: string, market?: string): Observable<SpotifyJsonResponseModel> {
    return this.http.get<SpotifyJsonResponseModel>(this.baseURL, {
      params: {
        ids: ids,
        market: market
      }
    });
  }

  getAudioAnalysis(id: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/audio-analysis/${id}`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  getAudioFeatures(id: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/audio-features/${id}`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  get(id: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.baseURL}${id}`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  queryAudioFeatures(ids: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/audio-features`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        ids: ids
      }
    });
  }
}
