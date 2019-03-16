import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminLoginService } from '../services/admin-login-service/admin-login.service';
import { ADMIN_API_URL } from '../registration.const';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminCredentials = [];

  adminForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminLoginService: AdminLoginService) {
  }

  ngOnInit() {
    this.getAdminCredentials().subscribe(data => {
      this.adminCredentials = data;
    });
  }

  getAdminCredentials() {
    return this.adminLoginService.getCredentialsData(ADMIN_API_URL);
  }

}
