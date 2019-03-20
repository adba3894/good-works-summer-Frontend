import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { REGISTER_API_URL } from '../../registration.const';

@Injectable()
export class JobRegistrationService {

  jsonForm: FormGroup;

  constructor(private jobRegistrationServiceHttp: HttpClient,
              private jobRegistrationServiceFormBuilder: FormBuilder) {

  }

  getIdeasData(ideasApiUrl): Observable<any> {
    return this.jobRegistrationServiceHttp.get(ideasApiUrl);
  }

  getCategoriesData(categoryApiUrl): Observable<any> {
    return this.jobRegistrationServiceHttp.get(categoryApiUrl);
  }

  getCitiesData(citiesApiUrl): Observable<any> {
    return this.jobRegistrationServiceHttp.get(citiesApiUrl);
  }

  submitForPost(teamForm: FormGroup, cities: any[], idea): Observable<any> {
    this.jsonForm = this.jobRegistrationServiceFormBuilder.group({
      'leadName': teamForm.get('teamLeadName').value.trim(),
      'leadEmail': teamForm.get('teamLeadEmail').value.trim(),
      'teamName': teamForm.get('teamName').value.trim(),
      'ideas': [[{
        'id': idea,
        'description': teamForm.get('ideaForJob').value.trim(),
        'organization': teamForm.get('organization').value.trim(),
        'category': teamForm.get('category').value.toUpperCase().replace(/ /g, '_'),
        'city': {
          'id': cities.find(city => city.name === teamForm.get('city').value).id,
          'name': teamForm.get('city').value
        },
        'project': {
          'done': false,
          'approved': true
        }
      }]]
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    return this.jobRegistrationServiceHttp.post<any>(REGISTER_API_URL, rawJsonFormValue);
  }

}
