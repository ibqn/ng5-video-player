import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass']
})
export class VideoPlayerComponent implements OnInit {
  public get path() { return this.video.path; }
  public get title() { return this.video.title; }

  public updateDuration = (e: any) => {
    const duration: number = e.target.duration || 0;
    console.log(`duration loaded: ${duration}`);
    this.video.duration = duration;
  }

  public updateTime = (e: any) => {
    const currentTime: number = e.target.currentTime || 0;
    const width: number = e.target.offsetWidth || 0;
    console.log(`current time: ${currentTime} and width ${width}`);
    this.video.currentTime = currentTime;
    this.video.progress = this.video.currentTime / this.video.duration * width;
  }

  constructor(private video: VideoService) { }

  ngOnInit() {
    this.video.path = './assets/video/cow.mp4';
    this.video.title = 'Hungry cow';
  }
}
