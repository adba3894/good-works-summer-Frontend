import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasPageComponent } from './ideas-page.component';

describe('IdeasPageComponent', () => {
  let component: IdeasPageComponent;
  let fixture: ComponentFixture<IdeasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
