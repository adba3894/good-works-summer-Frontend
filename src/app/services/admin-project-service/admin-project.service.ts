import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminProjectService {

  constructor(private adminProjectHttp: HttpClient, private adminProjectFormBuilder: FormBuilder) {

  }

  // getData(tableApiUrl: string) {
  //   return this.adminProjectHttp.get(tableApiUrl)
  //     .pipe(map((res: Response) => res.json()));
  // }

  getTeamsData(teamsApiUrl): Observable<any> {
    return this.adminProjectHttp.get(teamsApiUrl);
  }

  getCategoriesData(categoriesApiUrl): Observable<any> {
    return this.adminProjectHttp.get(categoriesApiUrl);
  }

}
