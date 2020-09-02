import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyPlayerRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  nextTrack(device?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/next/`;
    return this.http.post<SpotifyJsonResponseModel>(url, {
      device_id: device
    });
  }

  repeatTrack(state: string, device?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/repeat/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      device_id: device,
      state
    });
  }

  transferPlayback(deviceIds: string[], play?: boolean): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      device_ids: deviceIds,
      play
    });
  }

  getCurrentlyPlaying(market: string, additionalTypes?: string): Observable<SpotifyJsonResponseModel> {
    // TODO -> complete implementation
    const url = `${this.settings.getSetting('uri')}/me/player/currently-playing`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }
}
