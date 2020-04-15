import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsSliderComponent } from './top-news-slider.component';

describe('TopNewsSliderComponent', () => {
  let component: TopNewsSliderComponent;
  let fixture: ComponentFixture<TopNewsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNewsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
