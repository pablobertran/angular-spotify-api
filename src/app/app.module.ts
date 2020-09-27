import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RequestsModule} from './requests/requests.module';
import {FacadesModule} from './facades/facades.module';
import {ProvidersModule} from './providers/providers.module';

@NgModule({
  imports: [
    RequestsModule,
    FacadesModule,
    ProvidersModule
  ],
  bootstrap: [AppComponent]
})
export class AngularSpotifyApiModule { }
