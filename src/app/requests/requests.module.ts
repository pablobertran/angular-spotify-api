import {NgModule} from '@angular/core';
import {SpotifyRequest} from './spotify.request';
import {SpotifyAlbumsRequest} from './spotify-albums.request';
import {SpotifyBrowseRequest} from './spotify-browse.request';
import {SpotifyEpisodesRequest} from './spotify-episodes.request';
import {SpotifyFollowRequest} from './spotify-follow.request';
import {SpotifyPlayerRequest} from './spotify-player.request';
import {SpotifyPlaylistsRequest} from './spotify-playlists.request';
import {SpotifySearchRequest} from './spotify-search.request';
import {SpotifyShowsRequest} from './spotify-shows.request';
import {SpotifyTracksRequest} from './spotify-tracks.request';

@NgModule({
  providers: [
    SpotifyRequest,
    SpotifyAlbumsRequest,
    SpotifyBrowseRequest,
    SpotifyEpisodesRequest,
    SpotifyFollowRequest,
    SpotifyPlayerRequest,
    SpotifyPlaylistsRequest,
    SpotifySearchRequest,
    SpotifyShowsRequest,
    SpotifyTracksRequest
  ]
})
export class RequestsModule {}
