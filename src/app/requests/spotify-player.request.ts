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

  previousTrack(device?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/previous/`;
    return this.http.post<SpotifyJsonResponseModel>(url, {
      device_id: device
    });
  }

  userPlaybackRepeatMode(state: string, device?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/repeat/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      device_id: device,
      state
    });
  }

  userPlaybackVolume(volumePercent: string, deviceId?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/volume/`;
    return this.http.post<SpotifyJsonResponseModel>(url, {
      volume_percent: volumePercent,
      device_id: deviceId
    });
  }

  seekPosition(positionMs: string, deviceId?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/seek/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      device_id: deviceId,
      position_ms: positionMs
    });
  }

  userPlaybackShuffle(state: string, deviceId?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/shuffle/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      state,
      device_id: deviceId
    });
  }

  resumeUserPlayback(deviceId?: string,
                     contextURI?: string,
                     uris?: string[],
                     offset?: any,
                     positionMs?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/play`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      device_id: deviceId,
      context_uri: contextURI,
      uris,
      offset,
      position_ms: positionMs
    });
  }

  pauseUserPlayback(deviceId?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/pause`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      device_id: deviceId
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
    const url = `${this.settings.getSetting('uri')}/me/player/currently-playing`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        market,
        additional_types: additionalTypes
      }
    });
  }

  getRecentlyPlayed(limit?: number, after?: number, before?: number): Observable<any> {
    const url = `${this.settings.getSetting('uri')}/me/player/recently-played`;
    return this.http.get<any>(url, { params: {limit, after, before}});
  }

  getCurrentPlayback(market: string, additionalTypes?: string): Observable<SpotifyJsonResponseModel> {
    // TODO -> complete implementation
    const url = `${this.settings.getSetting('uri')}/me/player/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {params: {
      market,
        additional_types: additionalTypes
      }});
  }

  transferUserPlayback(deviceIds: string[], play?: boolean): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      device_ids: deviceIds,
      play
    });
  }

  getAvailableDevices(): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/devices`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  queueItem(uri: string, deviceId?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/player/queue`;
    return this.http.post<SpotifyJsonResponseModel>(url, {
      device_id: deviceId,
      uri
    });
  }
}
