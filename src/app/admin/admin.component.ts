import { Component, OnInit } from '@angular/core';
import { ADMIN_IDEAS_ADD_ENDPOINT, ADMIN_IDEAS_ENDPOINT, ADMIN_PROJECT_ENDPOINT } from '../registration.const';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AdminIdeaService } from '../services/admin-idea-service/admin-idea.service';
import { AdminLoginService } from '../services/admin-login-service/admin-login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminIdeaService: AdminIdeaService,
              private adminLoginService: AdminLoginService) {
  }

  ngOnInit() {
  }

  goToAdminIdea() {
    this.router.navigateByUrl(ADMIN_IDEAS_ENDPOINT);
  }

  goToAdminNewIdea() {
    this.router.navigateByUrl(ADMIN_IDEAS_ADD_ENDPOINT);
  }

  goToAdminProject() {
    this.router.navigateByUrl(ADMIN_PROJECT_ENDPOINT);
  }

  logoutOfAdmin() {
    this.adminLoginService.logoutAndNavigateToHome();
  }

}
