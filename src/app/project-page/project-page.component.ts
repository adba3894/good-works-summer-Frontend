import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProjectPageService} from '../services/project-page-service/project-page.service';
import { CATEGORY_API_URL } from '../registration.const';
import { TEAMS_API_URL } from '../registration.const';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  categories = [];
  teams = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private projectPageService: ProjectPageService) {
  }

  ngOnInit() {
    this.projectPageService.getTeamsData(TEAMS_API_URL)
      .subscribe(data => {
      this.teams = data;
    });
    this.projectPageService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
  }
}
