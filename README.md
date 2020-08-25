# angular-spotify-api

A component library that helps you interact with the [Spotify API Beta](https://developer.spotify.com/documentation/web-api/reference-beta/)

#demo

[![NPM](https://img.shields.io/npm/v/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![Build Status](https://travis-ci.com/idanlo/react-spotify-api.svg?branch=master)](https://travis-ci.com/idanlo/react-spotify-api)
[![Dependencies](https://david-dm.org/idanlo/react-spotify-api/status.svg)](https://david-dm.org/idanlo/react-spotify-api)
[![Dev Dependencies](https://david-dm.org/idanlo/react-spotify-api/dev-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=dev)
[![Peer Dependencies](https://david-dm.org/idanlo/react-spotify-api/peer-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=peer)
![Codecov](https://img.shields.io/codecov/c/github/idanlo/react-spotify-api.svg)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![GitHub](https://img.shields.io/github/license/idanlo/react-spotify-api.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Usage

Install angular-spotify-api via 
```
npm install pablobertran/angular-spotify-api --save
```

Import module on your app.module.ts file:
```
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [AngularSpotifyApiModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## Roadmap


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
