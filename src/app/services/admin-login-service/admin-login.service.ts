import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ADMIN_LOGIN_API_URL } from '../../registration.const';

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
    return this.adminLoginServiceHttp.post<any>(ADMIN_LOGIN_API_URL, rawJsonFormValue,
      {headers: new HttpHeaders()
          .set('Authorization',
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.e' +
            'yJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MzcxNDQ4M30.N9' +
            'uCbfjVyAdrJBlvg3d7Ej8PSMDQUODnDX07OBnrTDXcrNi' +
            '-BFUcnDP7HzrRlzWLM2gEo0PIyLPf5jPKbGHxpw'
          )});
  }

}
