import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProjectPageService } from '../services/project-page-service/project-page.service';
import { TEAMS_API_URL } from '../registration.const';
import { FILTERED_TEAMS_API_URL } from '../registration.const';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  teams = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private projectPageService: ProjectPageService) {
  }

  ngOnInit() {
    this.projectPageService.getTeamsData(TEAMS_API_URL)
      .subscribe(data => {
        this.teams = data;
      });
  }

  getBeautifulEnvironmentData() {
    this.projectPageService.getTeamsData(FILTERED_TEAMS_API_URL + '/BEAUTIFUL_ENVIRONMENT')
      .subscribe(data => {
        this.teams = data;
      });
  }

  getGivingBackData() {
    this.projectPageService.getTeamsData(FILTERED_TEAMS_API_URL + '/GIVING_BACK_TO_SOCIETY')
      .subscribe(data => {
        this.teams = data;
      });
  }

  getHelpingAnimalsData() {
    this.projectPageService.getTeamsData(FILTERED_TEAMS_API_URL + '/HELPING_ANIMALS')
      .subscribe(data => {
        this.teams = data;
      });
  }

  getSharingKnowledgeData() {
    this.projectPageService.getTeamsData(FILTERED_TEAMS_API_URL + '/SHARING_KNOWLEDGE')
      .subscribe(data => {
        this.teams = data;
      });
  }

  goToIdeas() {
    this.router.navigateByUrl('/ideas');
  }

  goToRegistration() {
    this.router.navigateByUrl('/registration');
  }
}
