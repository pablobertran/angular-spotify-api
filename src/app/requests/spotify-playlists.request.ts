import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyPlaylistsRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  getCurrentUserPlaylists(limit?: number, offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/me/playlists/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        limit,
        offset
      }
    });
  }

  getUserPlaylists(userId: string, limit?: number, offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/users/${userId}/playlists/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        limit,
        offset
      }
    });
  }

  createPlaylist(userId: string,
                 name: string,
                 isPublic?: boolean,
                 collaborative?: boolean,
                 description?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/users/${userId}/playlists/`;
    return this.http.post<SpotifyJsonResponseModel>(url, {
      name,
      public: isPublic,
      collaborative,
      description
    });
  }

  getPlaylist(playlistId: string, market?: string, fields?: string, additionalTypes?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        market,
        fields,
        additional_types: additionalTypes
      }
    });
  }

  changePlaylistDetails(playlistId: string,
                        market?: string,
                        fields?: string,
                        additionalTypes?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      market,
      fields,
      additional_types: additionalTypes
    });
  }

  getPlaylistItems(playlistId: string,
                   market?: string,
                   fields?: string,
                   limit?: number,
                   offset?: string,
                   additionalTypes?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/tracks`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        market,
        fields,
        limit,
        offset,
        additional_types: additionalTypes
      }
    });
  }

  addItemsToPlaylist(playlistId: string,
                     position?: string,
                     uris?: string[]): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/tracks`;
    return this.http.post<SpotifyJsonResponseModel>(url, {
      uris,
      position
    });
  }

  reorderPlaylistItems(playlistId: string,
                       uris?: string[],
                       rangeStart?: number,
                       insertBefore?: number,
                       rangeLength?: number,
                       snapshotId?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/tracks`;
    return this.http.put<SpotifyJsonResponseModel>(url, {
      uris,
      range_start: rangeStart,
      insert_before: insertBefore,
      range_length: rangeLength,
      snapshot_id: snapshotId
    });
  }

  removeItemFromPlaylist(playlistId: string,
                         tracks?: string[],
                         snapshotId?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/tracks`;
    return this.http.delete<SpotifyJsonResponseModel>(url, {
      params: {
        tracks,
        snapshot_id: snapshotId
      }
    });
  }

  getPlaylistCoverImage(playlistId: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/images`;
    return this.http.get<SpotifyJsonResponseModel>(url);
  }

  uploadCustomPlaylistCoverImage(playlistId: string, image: any): Observable<SpotifyJsonResponseModel> {
    // TODO -> Implement image upload
    const url = `${this.settings.getSetting('uri')}/playlists/${playlistId}/images`;
    return this.http.put<SpotifyJsonResponseModel>(url, {});
  }
}
