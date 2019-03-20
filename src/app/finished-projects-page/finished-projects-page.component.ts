import { Component, OnInit } from '@angular/core';
import { ProjectPageService } from '../services/project-page-service/project-page.service';
import { TEAMS_API_URL } from '../registration.const';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-finished-projects-page',
  templateUrl: './finished-projects-page.component.html',
  styleUrls: ['./finished-projects-page.component.css']
})
export class FinishedProjectsPageComponent implements OnInit {

  current = 0;
  teams = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private projectPageService: ProjectPageService) {
  }

  ngOnInit() {
    this.projectPageService.getTeamsData(TEAMS_API_URL)
      .subscribe(data => {
        this.teams = data;
      });
  }

}
