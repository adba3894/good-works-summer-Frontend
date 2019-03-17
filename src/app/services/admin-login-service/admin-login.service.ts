import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ADMIN_LOGIN_API_URL } from '../../registration.const';
import { Cookie } from 'ng2-cookies';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

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
      'password': adminForm.get('password').value,
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    const headers = new Headers({'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('marcus-client:marcus-secret')});
    const options = new RequestOptions({ headers: headers });
    return this.adminLoginServiceHttp.post(ADMIN_LOGIN_API_URL, rawJsonFormValue, options)
      .map(res => res.json())
      .subscribe(
        data => this.saveToken(data)
      );

    // console.log(this.jsonForm);
    // console.log(this.getHeaders());
    // return this.adminLoginServiceHttp.post(ADMIN_LOGIN_API_URL, rawJsonFormValue, { headers : this.getHeaders() })
      // {headers: {headers: this.getHeaders()}new HttpHeaders()
      //     .set('Authorization',
      //       'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.e' +
      //       'yJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MzcxNDQ4M30.N9' +
      //       'uCbfjVyAdrJBlvg3d7Ej8PSMDQUODnDX07OBnrTDXcrNi' +
      //       '-BFUcnDP7HzrRlzWLM2gEo0PIyLPf5jPKbGHxpw'
      //     )});
  }

  getHeaders() {
    const headers = new Headers({'Content-type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('access_token')});
    return headers;
  }

  // obtainAccessToken(username: string, password: string){
  //   const headers = new Headers({'Content-type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Basic ' + btoa('marcus-client:marcus-secret')});
  //   const options = new RequestOptions({ headers: headers });
  //   this.adminLoginServiceHttp.post(ADMIN_LOGIN_API_URL, rawJsonFormValue, options)
  //     .map(res => res.json())
  //     .subscribe(
  //       data => this.saveToken(data),
  //       err => alert('Invalid Credentials')
  //     );
  // }


  saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token');
    this.router.navigate(['/admin/project']);
  }

  // butinai padarykit -> npm install ng2-cookies

}
