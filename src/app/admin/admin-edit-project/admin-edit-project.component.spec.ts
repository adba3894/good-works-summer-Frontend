import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProjectComponent } from './admin-edit-project.component';

describe('AdminEditProjectComponent', () => {
  let component: AdminEditProjectComponent;
  let fixture: ComponentFixture<AdminEditProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
