import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditIdeaComponent } from './admin-edit-idea.component';

describe('AdminEditIdeaComponent', () => {
  let component: AdminEditIdeaComponent;
  let fixture: ComponentFixture<AdminEditIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
