import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyEpisodesRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  getMultipleEpisodes(ids: string,
                      market?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/episodes/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        ids,
        market
      }
    });
  }

  getEpisode(id: string,
             market?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/episodes/${id}`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        market
      }
    });
  }
}
