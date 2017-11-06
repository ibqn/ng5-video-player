import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoProgressComponent } from './video-progress/video-progress.component';
import { VideoToolbarComponent } from './video-toolbar/video-toolbar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoProgressComponent,
    VideoToolbarComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
