import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent extends AdminProjectService implements OnInit {
  readonly tableApiUrl = 'https://good-works-summer-backend.herokuapp.com';
  teams = [];

  constructor(private http: Http, private router: Router, private formBuilder: FormBuilder) {
    super(http, formBuilder);
  }

  ngOnInit() {
    this.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  getTeams() {
    return this.getData(this.tableApiUrl);
  }
}
