import {SpotifyRecommendationSeedModel} from './SpotifyRecommendationSeed.model';
import {SpotifySimplifiedTrackModel} from './SpotifySimplifiedTrack.model';

export interface SpotifyRecommendationsResponseModel {
  seeds: SpotifyRecommendationSeedModel[];
  tracks: SpotifySimplifiedTrackModel[];
}
