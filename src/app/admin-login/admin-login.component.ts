import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private adminApiUrl = 'https://good-works-summer-backend.herokuapp.com/initialdata/admin';
  adminCredentials = [];

  adminForm: FormGroup;
  submitted = false;

  constructor(private http: Http, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.getAdminCredentials().subscribe(data => {
      this.adminCredentials = data;
    });
  }

  getAdminCredentials() {
    return this.getData(this.adminApiUrl);
  }

  getData(ApiURL) {
    return this.http.get(ApiURL)
      .pipe(map((res: Response) => res.json()));
  }

}
