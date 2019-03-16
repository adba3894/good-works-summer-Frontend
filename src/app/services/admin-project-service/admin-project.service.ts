import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ADMIN_PROJECT_APPROVE_API_URL, ADMIN_PROJECT_DONE_API_URL } from '../../registration.const';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectService {
  jsonForm: FormGroup;

  constructor(private adminProjectHttp: HttpClient, private adminProjectServiceFormBuilder: FormBuilder) {

  }

  getTeamsData(teamsApiUrl): Observable<any> {
    return this.adminProjectHttp.get(teamsApiUrl);
  }

  changeProjectValueToApproved(projectId: any) {
    this.jsonForm = this.adminProjectServiceFormBuilder.group({
      'project': {
        'id': projectId,
        'approved': true
      }
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    // console.log('approved project with id' + projectId);
    // console.log(rawJsonFormValue);
    return this.adminProjectHttp.put<any>(ADMIN_PROJECT_APPROVE_API_URL + projectId, rawJsonFormValue);
  }

  changeProjectValueToDone(projectId: any) {
    this.jsonForm = this.adminProjectServiceFormBuilder.group({
      'project': {
        'id': projectId,
        'done': true
      }
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    // console.log('done project NO' + projectId);
    // console.log(rawJsonFormValue);
    return this.adminProjectHttp.put<any>(ADMIN_PROJECT_DONE_API_URL + projectId, rawJsonFormValue);
  }

}
