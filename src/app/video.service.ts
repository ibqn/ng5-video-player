import { Injectable } from '@angular/core';


@Injectable()
export class VideoService {
  private _title: string;
  private _path: string;
  private _duration: number;
  private _currentTime: number;
  private _progress: number;

  public get progress(): number { return this._progress; }
  public set progress(progress: number) { this._progress = progress; }

  public get duration(): number { return this._duration; }
  public set duration(duration: number) { this._duration = duration; }

  public get currentTime(): number { return this._currentTime; }
  public set currentTime(currentTime: number) { this._currentTime = currentTime; }

  public get title(): string { return this._title; }
  public set title(title: string) { this._title = title; }

  public get path(): string { return this._path; }
  public set path(path: string) { this._path = path; }

  constructor() {
    this._title = 'loading...';
    this._path = '';
    this._duration = 0;
    this._currentTime = 0;
    this._progress = 0;
  }
}
