import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';
import {SpotifyBrowseRecommendationModel} from '../models/SpotifyBrowseRecommendation.model';

@Injectable()
export class SpotifyBrowseRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  getAllNewReleases(country?: string,
                    limit?: number,
                    offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/new-releases/`;
    const params = new HttpParams();
    params.set('country', country);
    params.set('limit', limit + '');
    params.set('offset', offset + '');
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }

  getAllFeaturedPlaylists(country?: string,
                          locale?: string,
                          timestamp?: string,
                          limit?: number,
                          offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/featured-playlists/`;
    const params = new HttpParams();
    params.set('country', country);
    params.set('locale', locale);
    params.set('timestamp', timestamp);
    params.set('limit', limit + '');
    params.set('offset', offset + '');
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }

  getAllCategories(country?: string,
                   locale?: string,
                   limit?: number,
                   offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/categories/`;
    const params = new HttpParams();
    params.set('country', country);
    params.set('locale', locale);
    params.set('limit', limit + '');
    params.set('offset', offset + '');
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }

  getCategory(categoryId: string,
              country?: string,
              locale?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/categories/${categoryId}/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        country,
        locale
      }
    });
  }

  getCategoryPlaylists(categoryId: string,
                       country?: string,
                       locale?: string): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/categories/${categoryId}/playlists/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        country,
        locale
      }
    });
  }

  getRecommendations(parameters: SpotifyBrowseRecommendationModel): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/recommendations/`;
    const params = new HttpParams();
    for (const key of Object.keys(parameters)) {
      params.set(key, parameters[key] + '');
    }
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params
    });
  }

  getRecommendationGenres(): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/recommendations/available-genre-seeds/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {});
  }
}
