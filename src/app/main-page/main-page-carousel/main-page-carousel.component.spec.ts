import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCarouselComponent } from './main-page-carousel.component';

describe('MainPageCarouselComponent', () => {
  let component: MainPageCarouselComponent;
  let fixture: ComponentFixture<MainPageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageCarouselComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
