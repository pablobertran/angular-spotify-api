import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyFollowRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  followPlaylist(playlistId: string,
                 isPublic?: boolean): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/followers/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      public: isPublic
    });
  }

  unfollowPlaylist(playlistId: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/followers/`;
    return this.http.delete<SpotifyJsonResponseModel>(url, {});
  }

  checkUsersFollowPlaylist(playlistId: string,
                           ids: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/followers/contains/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        ids
      }
    });
  }

  getUserFollowedArtists(type: string,
                         after?: string,
                         limit?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/following/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        type,
        after: after.toString(),
        limit: limit.toString()
      }
    });
  }

  followUsersOrArtists(type: string,
                       ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/following/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      type,
      ids
    });
  }

  unfollowUsersOrArtists(type: string,
                         ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/following/`;
    return this.http.delete<SpotifyJsonResponseModel>(url, {
      params: {
        type,
        ids
      }
    });
  }

  getFollowingStateForUsersOrArtists(type: string,
                                     ids: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/following/contains/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        type,
        ids
      }
    });
  }
}
