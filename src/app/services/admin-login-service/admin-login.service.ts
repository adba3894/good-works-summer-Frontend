import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ADMIN_LOGIN_API_URL } from '../../registration.const';
import { Cookie } from 'ng2-cookies';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  jsonForm: FormGroup;
  constructor(private adminLoginServiceHttp: HttpClient, private adminLoginServiceFormBuilder: FormBuilder) {
  }

  postAdminCredentials(adminForm: FormGroup): Observable<any> {
    this.jsonForm = this.adminLoginServiceFormBuilder.group({
      'username': adminForm.get('username').value,
      'password': adminForm.get('password').value,
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    return this.adminLoginServiceHttp.post<any>(ADMIN_LOGIN_API_URL, rawJsonFormValue, { headers : this.getHeaders() })
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

  // butinai padarykit -> npm install ng2-cookies

}
