import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifySettingsProvider} from '../providers/spotify-settings.provider';
import {Observable} from 'rxjs';
import {SpotifyJsonResponseModel} from '../models/SpotifyJsonResponse.model';

@Injectable()
export class SpotifyBrowseRequest {
  constructor(private http: HttpClient,
              private settings: SpotifySettingsProvider) {
  }

  getAllNewReleases(country?: string,
                    limit?: number,
                    offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/new-releases/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        country,
        limit,
        offset
      }
    });
  }

  getAllFeaturedPlaylists(country?: string,
                          locale?: string,
                          timestamp?: string,
                          limit?: number,
                          offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/featured-playlists/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        country,
        locale,
        timestamp,
        limit,
        offset
      }
    });
  }

  getAllCategories(country?: string,
                   locale?: string,
                   limit?: number,
                   offset?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/browse/categories/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        country,
        locale,
        limit,
        offset
      }
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

  getRecommendations(seedArtists: string,
                     seedGenres: string,
                     seedTracks: string,
                     minAcousticness?: number,
                     maxAcousticness?: number,
                     targetAcousticness?: number,
                     minDanceability?: number,
                     maxDanceability?: number,
                     targetDanceability?: number,
                     minDurationMs?: number,
                     maxDurationMs?: number,
                     targetDurationMs?: number,
                     minEnergy?: number,
                     maxEnergy?: number,
                     targetEnergy?: number,
                     minInstrumentalness?: number,
                     maxInstrumentalness?: number,
                     targetInstrumentalness?: number,
                     minKey?: number,
                     maxKey?: number,
                     targetKey?: number,
                     minLiveness?: number,
                     maxLiveness?: number,
                     targetLiveness?: number,
                     minLoudness?: number,
                     maxLoudness?: number,
                     targetLoudness?: number,
                     minMode?: number,
                     maxMode?: number,
                     targetMode?: number,
                     minPopularity?: number,
                     maxPopularity?: number,
                     targetPopularity?: number,
                     minSpeechiness?: number,
                     maxSpeechiness?: number,
                     targetSpeechiness?: number,
                     minTempo?: number,
                     maxTempo?: number,
                     targetTempo?: number,
                     minTimeSignature?: number,
                     maxTimeSignature?: number,
                     targetTimeSignature?: number,
                     minValence?: number,
                     maxValence?: number,
                     targetValence?: number): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/recommendations/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {
      params: {
        seed_artists: seedArtists,
        seed_genres: seedGenres,
        seed_tracks: seedTracks,
        min_acousticness: minAcousticness,
        max_acousticness: maxAcousticness,
        target_acousticness: targetAcousticness,
        min_danceability: minDanceability,
        max_danceability: maxDanceability,
        target_danceability: targetDanceability,
        min_durationMs: minDurationMs,
        max_durationMs: maxDurationMs,
        target_durationMs: targetDurationMs,
        min_energy: minEnergy,
        max_energy: maxEnergy,
        target_energy: targetEnergy,
        min_instrumentalness: minInstrumentalness,
        max_instrumentalness: maxInstrumentalness,
        target_instrumentalness: targetInstrumentalness,
        min_key: minKey,
        max_key: maxKey,
        target_key: targetKey,
        min_liveness: minLiveness,
        max_liveness: maxLiveness,
        target_liveness: targetLiveness,
        min_loudness: minLoudness,
        max_loudness: maxLoudness,
        target_loudness: targetLoudness,
        min_mode: minMode,
        max_mode: maxMode,
        target_mode: targetMode,
        min_popularity: minPopularity,
        max_popularity: maxPopularity,
        target_popularity: targetPopularity,
        min_speechiness: minSpeechiness,
        max_speechiness: maxSpeechiness,
        target_speechiness: targetSpeechiness,
        min_tempo: minTempo,
        max_tempo: maxTempo,
        target_tempo: targetTempo,
        min_time_signature: minTimeSignature,
        max_time_signature: maxTimeSignature,
        target_time_signature: targetTimeSignature,
        min_valence: minValence,
        max_valence: maxValence,
        target_valence: targetValence
      }
    });
  }

  getRecommendationGenres(): Observable<SpotifyJsonResponseModel> {
    const url = `${this.settings.getSetting('uri')}/recommendations/available-genre-seeds/`;
    return this.http.get<SpotifyJsonResponseModel>(url, {});
  }
}
