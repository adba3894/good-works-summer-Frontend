import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectPageService {
  constructor(private projectPageServiceHttp: HttpClient) {
  }
  getTeamsData(teamsApiUrl): Observable<any> {
    return this.projectPageServiceHttp.get(teamsApiUrl);
  }

}


