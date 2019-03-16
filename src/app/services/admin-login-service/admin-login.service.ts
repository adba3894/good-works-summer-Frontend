import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private adminLoginServiceHttp: HttpClient, private adminLoginServiceFormBuilder: FormBuilder) {
  }

  getCredentialsData(adminApiUrl): Observable<any> {
    return this.adminLoginServiceHttp.get(adminApiUrl);
  }

}
