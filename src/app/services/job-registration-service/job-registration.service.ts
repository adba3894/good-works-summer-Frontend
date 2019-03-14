import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JobRegistrationService {

  jsonForm: FormGroup;


  constructor(private jobRegistrationServiceHttp: HttpClient,
              private jobRegistrationServiceFormBuilder: FormBuilder) {

  }

  getData(ApiURL): Observable<any> {
    return this.jobRegistrationServiceHttp.get(ApiURL);
  }

  submitForPost(teamForm: FormGroup, cities: any[], rootApiUrl: string): Observable<any> {
    this.jsonForm = this.jobRegistrationServiceFormBuilder.group({
      'leadName': teamForm.get('teamLeadName').value.trim(),
      'leadEmail': teamForm.get('teamLeadEmail').value.trim(),
      'teamName': teamForm.get('teamName').value.trim(),
      'city': {
        'id': cities.find(city => city.name === teamForm.get('city').value).id,
        'name': teamForm.get('city').value
      },
      'ideas': [[{
        'description': teamForm.get('ideaForJob').value.trim(),
        'project': {
          'category': teamForm.get('category').value.toUpperCase().replace(/ /g, '_')
        }
      }]],
      'organization': teamForm.get('organization').value.trim()
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.jobRegistrationServiceHttp.post<any>(rootApiUrl + '/registration', rawJsonFormValue, options)
      .pipe(catchError((errorMessage: any) => throwError(errorMessage)));
  }
}

