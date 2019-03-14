import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectService {

  constructor(private adminProjectHttp: HttpClient, private adminProjectFormBuilder: FormBuilder) {

  }

  getData(tableApiUrl: string) {
    return this.adminProjectHttp.get(tableApiUrl)
      .pipe(map((res: Response) => res.json()));
  }


}
