import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectPageService {
  constructor(private jobRegistrationServiceHttp: HttpClient) {
  }

  getCategoriesData(categoryApiUrl): Observable<any> {
    return this.jobRegistrationServiceHttp.get(categoryApiUrl);
  }
  getTeamsData(teamsApiUrl): Observable<any> {
    return this.jobRegistrationServiceHttp.get(teamsApiUrl);
  }
}

