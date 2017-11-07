import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-video-progress',
  templateUrl: './video-progress.component.html',
  styleUrls: ['./video-progress.component.sass']
})
export class VideoProgressComponent implements OnInit {
  public get progress() { return this.video.progress; }

  constructor(private video: VideoService) { }

  ngOnInit() {
  }

}
