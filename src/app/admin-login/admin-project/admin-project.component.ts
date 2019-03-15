import { Component, OnInit } from '@angular/core';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { TEAMS_API_URL } from '../../registration.const';
import { CATEGORY_API_URL } from '../../registration.const';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  readonly tableApiUrl = 'https://good-works-summer-backend.herokuapp.com';
  teams = [];
  categories = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private adminProjectService: AdminProjectService) {
  }

  ngOnInit() {
    this.getTeams().subscribe(data => {
      this.teams = data;
    });
    this.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getTeams() {
    return this.adminProjectService.getTeamsData(TEAMS_API_URL);
  }

  getCategories() {
    return this.adminProjectService.getCategoriesData(CATEGORY_API_URL);
  }

  goToAdminIdea() {
    this.router.navigateByUrl('/admin/idea');
  }

  goToAdminProject() {
    this.router.navigateByUrl('/admin/project');
  }


}
