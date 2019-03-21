import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ADMIN_PROJECT_APPROVE_API_URL,
  ADMIN_PROJECT_DONE_API_URL,
  ADMIN_PROJECT_EDIT_API_URL
} from '../../registration.const';

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

  getCategoriesData(categoryApiUrl): Observable<any> {
    return this.adminProjectHttp.get(categoryApiUrl);
  }

  getCitiesData(citiesApiUrl): Observable<any> {
    return this.adminProjectHttp.get(citiesApiUrl);
  }

  changeProjectValueToApproved(projectId: any) {
    this.jsonForm = this.adminProjectServiceFormBuilder.group({
      'approved': true
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    return this.adminProjectHttp.put<any>(ADMIN_PROJECT_APPROVE_API_URL + projectId, rawJsonFormValue).subscribe();
  }

  changeProjectValueToDone(projectId: any) {
    this.jsonForm = this.adminProjectServiceFormBuilder.group({
      'done': true
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    return this.adminProjectHttp.put<any>(ADMIN_PROJECT_DONE_API_URL + projectId, rawJsonFormValue).subscribe();
  }

  submitForPost(teamForm: FormGroup, cities: any[], projectIdParam): Observable<any> {
    this.jsonForm = this.adminProjectServiceFormBuilder.group({
      'id': projectIdParam,
      'leadName': teamForm.get('teamLeadName').value.trim(),
      'leadEmail': teamForm.get('teamLeadEmail').value.trim(),
      'teamName': teamForm.get('teamName').value.trim(),
      'ideas': [[{
        'description': teamForm.get('ideaForJob').value.trim(),
        'organization': teamForm.get('organization').value.trim(),
        'category': teamForm.get('category').value.toUpperCase().replace(/ /g, '_'),
        'city': {
          'id': cities.find(city => city.name === teamForm.get('city').value).id,
          'name': teamForm.get('city').value
        },
        'project': {
          'done': teamForm.get('done').value,
          'approved': teamForm.get('approved').value
        }
      }]]
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    return this.adminProjectHttp.put<any>(ADMIN_PROJECT_EDIT_API_URL, rawJsonFormValue);
  }

}
