import { Component, OnInit } from '@angular/core';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ADMIN_IDEAS_ADD_ENDPOINT, ADMIN_IDEAS_ENDPOINT, ADMIN_PROJECT_ENDPOINT, TEAMS_API_URL } from '../../registration.const';
import { AdminLoginService } from '../../services/admin-login-service/admin-login.service';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  teams = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private adminProjectService: AdminProjectService,
              private adminLoginService: AdminLoginService) {
  }

  ngOnInit() {
    this.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  getTeams() {
    return this.adminProjectService.getTeamsData(TEAMS_API_URL);
  }

  approveProject(projectId: any) {
    this.adminProjectService.changeProjectValueToApproved(projectId);
  }

  markProjectAsDone(projectId: any) {
    this.adminProjectService.changeProjectValueToDone(projectId);
  }
}
