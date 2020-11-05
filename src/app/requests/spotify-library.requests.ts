import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyLibraryRequests {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  getCurrentUserSavedAlbums(limit?: number, offset?: number, market?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/albums/`;
    const httpParams = new HttpParams();
    httpParams.set('limit', limit + '');
    httpParams.set('offset', offset + '');
    httpParams.set('market', market + '');
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: httpParams
    });
  }

  saveCurrentUserAlbums(ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/albums/`;
    return this.http.post<SpotifyJsonResponseModel>(url, {ids});
  }

  removeCurrentUserAlbums(ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/albums/`;
    return this.http.delete<SpotifyJsonResponseModel>(url, {
      params: {
        ids
      }
    });
  }

  checkCurrentUserSavedAlbums(ids: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/albums/contains`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        ids
      }
    });
  }

  getCurrentUserSavedTracks(limit?: number, offset?: number, market?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/tracks`;
    const params = new HttpParams();
    params.set('limit', limit + '');
    params.set('offset', offset + '');
    params.set('market', market + '');
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }

  saveCurrentUserTracks(ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/tracks/`;
    return this.http.post<SpotifyJsonResponseModel>(url, {ids});
  }

  removeCurrentUserSavedTracks(ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/tracks/`;
    return this.http.delete<SpotifyJsonResponseModel>(url, {
      params: {
        ids
      }
    });
  }

  checkCurrentUserSavedTracks(ids: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/tracks/contains`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        ids
      }
    });
  }

  getCurrentUserSavedShows(limit?: number, offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/shows`;
    const params = new HttpParams();
    params.set('limit', limit + '');
    params.set('offset', offset + '');
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }

  saveCurrentUserShows(ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/shows/`;
    return this.http.post<SpotifyJsonResponseModel>(url, {ids});
  }

  removeCurrentUserSavedShows(ids: string[], market?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/shows/`;
    return this.http.delete<SpotifyJsonResponseModel>(url, {
      params: {
        ids,
        market
      }
    });
  }

  checkCurrentUserSavedShows(ids: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/shows/contains`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        ids
      }
    });
  }
}
