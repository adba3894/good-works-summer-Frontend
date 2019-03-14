import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      providers: [RegistrationComponent]
    })
      .compileComponents();
  }));

  // service.getCities().subscribe(data => {
  //   expect(data.pageInfo.totalRecordCount).toBe(21);
  //   expect(data.pageInfo.pageNumber).toBe(0);
  //   expect(data.data.length).toBe(7);
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
