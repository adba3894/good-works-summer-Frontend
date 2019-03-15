import { Component, OnInit } from '@angular/core';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { TEAMS_API_URL } from '../../registration.const';
// import { FILTERED_TEAMS_API_URL } from '../../registration.const';
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
  // filteredTeams = [];
  // private pathCategory: string;

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

  // getFilteredTeams() {
  //   return this.adminProjectService.getData(FILTERED_TEAMS_API_URL + this.pathCategory)
  // }


}
