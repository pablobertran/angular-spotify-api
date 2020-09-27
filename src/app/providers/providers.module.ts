import {NgModule} from '@angular/core';
import {SpotifyProvider} from './spotify.provider';
import {SpotifyLibraryProvider} from './spotify-library.provider';
import {SpotifySettingsProvider} from './spotify-settings.provider';

@NgModule({
  providers: [
    SpotifyProvider,
    SpotifyLibraryProvider,
    SpotifySettingsProvider
  ]
})
export class ProvidersModule {}
