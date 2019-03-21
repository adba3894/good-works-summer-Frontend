import { Component, OnInit } from '@angular/core';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {
  ADMIN_PROJECT_UPDATE_FORM_ENDPOINT,
  CATEGORY_API_URL,
  CITIES_API_URL,
  TEAMS_API_URL
} from '../../registration.const';
import { AdminEditProjectComponent } from '../admin-edit-project/admin-edit-project.component';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  teams = [];
  cities = [];
  categories = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private adminProjectService: AdminProjectService) {
  }

  ngOnInit() {
    this.getTeams().subscribe(data => {
      this.teams = data;
    });
    this.adminProjectService.getCitiesData(CITIES_API_URL)
      .subscribe(data => {
      this.cities = data;
    });
    this.adminProjectService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
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

  editProjectInformation() {
    this.goToAdminEditProjectPage();
  }

  goToAdminEditProjectPage() {
    this.router.navigateByUrl(ADMIN_PROJECT_UPDATE_FORM_ENDPOINT);
  }

  onSelect(leadName, teamEmail, teamName, category, organization, city, description, id) {
    this.router.navigate([
      '/admin/project/update',
      this.b64EncodeUnicode(leadName),
      this.b64EncodeUnicode(teamEmail),
      this.b64EncodeUnicode(teamName),
      this.b64EncodeUnicode(category),
      this.b64EncodeUnicode(organization),
      this.b64EncodeUnicode(city),
      this.b64EncodeUnicode(description),
      this.b64EncodeUnicode(id)
    ]);
  }

  b64EncodeUnicode(param) {
    return btoa(encodeURIComponent(param).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(Number('0x' + p1));
      }));
  }
}
