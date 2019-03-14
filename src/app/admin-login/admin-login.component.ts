import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from '../services/admin-login-service/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent extends AdminLoginService implements OnInit {

  private adminApiUrl = 'https://good-works-summer-backend.herokuapp.com/initialdata/admin';
  adminCredentials = [];

  adminForm: FormGroup;
  submitted = false;

  constructor(private http: Http, private router: Router, private formBuilder: FormBuilder) {
    super(http, formBuilder);
  }

  ngOnInit() {
    this.getAdminCredentials().subscribe(data => {
      this.adminCredentials = data;
    });
  }

  getAdminCredentials() {
    return this.getData(this.adminApiUrl);
  }

}
