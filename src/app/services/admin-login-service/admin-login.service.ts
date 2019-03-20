import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ADMIN_LOGIN_API_URL } from '../../registration.const';
import { Cookie } from 'ng2-cookies';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  jsonForm: FormGroup;

  constructor(private adminLoginServiceHttp: Http, private adminLoginServiceFormBuilder: FormBuilder, private router: Router) {
  }

  postAdminCredentials(adminForm: FormGroup): Observable<any> {
    this.jsonForm = this.adminLoginServiceFormBuilder.group({
      'username': adminForm.get('username').value,
      'password': adminForm.get('password').value
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    const options = new RequestOptions({ headers: this.getHeaders() });
    return this.adminLoginServiceHttp.post(ADMIN_LOGIN_API_URL, rawJsonFormValue, options)
      .pipe(map(res => {
        localStorage.setItem('token', res.headers.get('Authorization'));
      }));
  }

  getHeaders() {
    const headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('access_token')
    });
    return headers;
  }

  // butinai padarykit -> npm install ng2-cookies

}
