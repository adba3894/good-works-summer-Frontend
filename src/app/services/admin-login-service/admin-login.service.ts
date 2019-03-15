import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private adminLoginServiceHttp: HttpClient, private adminLoginServiceFormBuilder: FormBuilder) {
  }

  // getData(ApiURL) {
  //   return this.adminLoginServiceHttp.get(ApiURL)
  //     .pipe(map((res: Response) => res.json()));
  // }

  getCredentialsData(adminApiUrl): Observable<any> {
    return this.adminLoginServiceHttp.get(adminApiUrl);
  }

}
