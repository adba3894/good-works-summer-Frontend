import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectPageService {
  constructor(private projectPageServiceHttp: HttpClient) {
  }

  getCategoriesData(categoryApiUrl): Observable<any> {
    return this.projectPageServiceHttp.get(categoryApiUrl);
  }
  getTeamsData(teamsApiUrl): Observable<any> {
    return this.projectPageServiceHttp.get(teamsApiUrl);
  }
}

