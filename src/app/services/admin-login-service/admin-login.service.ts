import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminLoginService {

  constructor(private adminLoginServiceHttp: HttpClient, private adminLoginServiceFormBuilder: FormBuilder) {
  }

  getData(ApiURL) {
    return this.adminLoginServiceHttp.get(ApiURL)
      .pipe(map((res: Response) => res.json()));
  }
}
