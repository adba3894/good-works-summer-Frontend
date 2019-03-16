import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectService {

  constructor(private adminProjectHttp: HttpClient, private adminProjectFormBuilder: FormBuilder) {

  }

  getTeamsData(teamsApiUrl): Observable<any> {
    return this.adminProjectHttp.get(teamsApiUrl);
  }

}
