import {Injectable} from '@angular/core';
import {SpotifyAPISettingsModel} from '../models/SpotifyAPISettings.model';

@Injectable()
export class SpotifySettingsProvider {
  private spotifyAPISettings: SpotifyAPISettingsModel = {
    uri: 'https://api.spotify.com/v1/',
    token: '',
    client: '',
    vendor: ''
  };

  constructor() {
  }

  setSetting(key: string, value: string): void {
    this.spotifyAPISettings[key] = value;
  }

  getSetting(key): string {
    return this.spotifyAPISettings[key];
  }
}
