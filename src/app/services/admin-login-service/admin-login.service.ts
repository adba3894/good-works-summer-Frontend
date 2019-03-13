import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private adminLoginServiceHttp: Http, private adminLoginServiceFormBuilder: FormBuilder) {
  }

  getData(ApiURL) {
    return this.adminLoginServiceHttp.get(ApiURL)
      .pipe(map((res: Response) => res.json()));
  }
}
