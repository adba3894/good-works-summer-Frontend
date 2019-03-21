import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from '../../services/admin-login-service/admin-login.service';
import { ADMIN_PROJECT_ENDPOINT } from '../../registration.const';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminCredentials: FormGroup;
  public errorMsg;
  public successMsg;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminLoginService: AdminLoginService) {
  }

  ngOnInit() {
    this.adminCredentials = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.errorMsg = '';
    this.successMsg = '';
    this.submitted = true;
    if (this.adminCredentials.valid) {
      this.adminLoginService.postAdminCredentials(this.adminCredentials)
      .subscribe(() => {
        this.successMsg = 'Login successful';
        this.navigateToAdminProject();
      }, (errorMessage) => {
        console.log(errorMessage);
        this.errorMsg = errorMessage.error.message;
      });
      this.navigateToAdminProject();
    }
  }

  get loginWithAdminCredentials() {
    return this.adminCredentials.controls;
  }

  navigateToAdminProject() {
    this.router.navigateByUrl(ADMIN_PROJECT_ENDPOINT);
  }
}
