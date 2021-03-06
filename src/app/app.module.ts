import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoProgressComponent } from './video-progress/video-progress.component';
import { VideoToolbarComponent } from './video-toolbar/video-toolbar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import { VideoService } from './video.service';
import { TimeDisplayPipe } from './time-display.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VideoProgressComponent,
    VideoToolbarComponent,
    VideoPlayerComponent,
    TimeDisplayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    VideoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
