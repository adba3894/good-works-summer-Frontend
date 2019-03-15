import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIdeaComponent } from './admin-idea.component';

describe('AdminIdeaComponent', () => {
  let component: AdminIdeaComponent;
  let fixture: ComponentFixture<AdminIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
