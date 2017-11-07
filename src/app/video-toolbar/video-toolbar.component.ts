import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { TimeDisplayPipe } from '../time-display.pipe';


@Component({
  selector: 'app-video-toolbar',
  templateUrl: './video-toolbar.component.html',
  styleUrls: ['./video-toolbar.component.sass']
})
export class VideoToolbarComponent implements OnInit {
  public get duration() { return this.video.duration; }
  public get currentTime() { return this.video.currentTime; }
  public get muted() { return this.video.muted; }

  constructor(private video: VideoService) { }

  ngOnInit() {
  }

}
