import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { TrackPipe } from './Pipes/track.pipe';
import { AudioComponent } from './Component/audio/audio.component';
import { TrackComponent } from './Component/track/track.component'

@NgModule({
  declarations: [
    AppComponent,
    TrackPipe,
    AudioComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
