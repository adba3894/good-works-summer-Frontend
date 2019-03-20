import { Component, OnInit } from '@angular/core';
import { AdminIdeaService } from '../../services/admin-idea-service/admin-idea.service';
import { ADMIN_IDEAS_ADD_ENDPOINT, ADMIN_IDEAS_ENDPOINT, ADMIN_PROJECT_ENDPOINT, FREE_IDEAS_API_URL } from '../../registration.const';
import { Router } from '@angular/router';
import { AdminLoginService } from '../../services/admin-login-service/admin-login.service';

@Component({
  selector: 'app-admin-idea',
  templateUrl: './admin-idea.component.html',
  styleUrls: ['./admin-idea.component.css']
})
export class AdminIdeaComponent implements OnInit {
  ideas = [];

  constructor(private router: Router, private adminIdeaService: AdminIdeaService, private adminLoginService: AdminLoginService) {
  }

  ngOnInit() {
    this.adminIdeaService.getIdeasData(FREE_IDEAS_API_URL)
      .subscribe(data => {
        this.ideas = data;
      });
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
