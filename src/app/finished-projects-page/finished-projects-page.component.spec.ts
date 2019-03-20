import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedProjectsPageComponent } from './finished-projects-page.component';

describe('FinishedProjectsPageComponent', () => {
  let component: FinishedProjectsPageComponent;
  let fixture: ComponentFixture<FinishedProjectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedProjectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
