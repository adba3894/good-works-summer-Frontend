import { Component, OnInit } from '@angular/core';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ADMIN_IDEAS_ENDPOINT, ADMIN_PROJECT_ENDPOINT, TEAMS_API_URL } from '../../registration.const';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  teams = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private adminProjectService: AdminProjectService) {
  }

  ngOnInit() {
    this.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  getTeams() {
    return this.adminProjectService.getTeamsData(TEAMS_API_URL);
  }

  goToAdminIdea() {
    this.router.navigateByUrl(ADMIN_IDEAS_ENDPOINT);
  }

  goToAdminProject() {
    this.router.navigateByUrl(ADMIN_PROJECT_ENDPOINT);
  }

  approveProject(projectId: any) {
    this.adminProjectService.changeProjectValueToApproved(projectId);
  }

  markProjectAsDone(projectId: any) {
    this.adminProjectService.changeProjectValueToDone(projectId);
  }
}
