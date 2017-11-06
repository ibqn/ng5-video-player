import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoToolbarComponent } from './video-toolbar.component';

describe('VideoToolbarComponent', () => {
  let component: VideoToolbarComponent;
  let fixture: ComponentFixture<VideoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
