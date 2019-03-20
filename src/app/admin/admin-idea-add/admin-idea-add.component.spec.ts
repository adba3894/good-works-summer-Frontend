import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIdeaAddComponent } from './admin-idea-add.component';

describe('AdminIdeaAddComponent', () => {
  let component: AdminIdeaAddComponent;
  let fixture: ComponentFixture<AdminIdeaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIdeaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIdeaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
