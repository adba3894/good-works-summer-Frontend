import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AdminProjectService } from '../services/admin-project-service/admin-project.service';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent extends AdminProjectService implements OnInit {

  constructor(private http: Http) {
    super(http);
  }

  ngOnInit() {
  }


}
