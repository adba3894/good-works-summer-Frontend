import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ADMIN_SIGN_UP_API_URL } from '../../registration.const';

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
    return this.adminLoginServiceHttp.post<any>(ADMIN_SIGN_UP_API_URL, rawJsonFormValue);
  }

}
