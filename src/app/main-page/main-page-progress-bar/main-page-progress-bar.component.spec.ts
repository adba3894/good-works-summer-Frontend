import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageProgressBarComponent } from './main-page-progress-bar.component';

describe('MainPageProgressBarComponent', () => {
  let component: MainPageProgressBarComponent;
  let fixture: ComponentFixture<MainPageProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
