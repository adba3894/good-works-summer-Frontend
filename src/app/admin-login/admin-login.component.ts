import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  submitted = false;

  constructor() { }

  ngOnInit() {
  }
  //
  // onSubmit() {
  //   this.submitted = true;
  //   if (this.teamForm.invalid) {
  //     return;
  //   }
  //   this.gotoAdminProject();
  // }
  //
  // gotoAdminProject() {
  //   this.router.navigateByRouter('registration/success');
  // }

}
