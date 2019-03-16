import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminIdeaService {
  jsonForm: FormGroup;

  constructor(private adminIdeaServiceHttp: HttpClient,
              private adminIdeaServiceFormBuilder: FormBuilder) {
  }

  getCategoriesData(categoryApiUrl): Observable<any> {
    return this.adminIdeaServiceHttp.get(categoryApiUrl);
  }

  getCitiesData(citiesApiUrl): Observable<any> {
    return this.adminIdeaServiceHttp.get(citiesApiUrl);
  }

  submitForPost(teamForm: FormGroup, cities: any[], rootApiUrl: string): Observable<any> {
    this.jsonForm = this.adminIdeaServiceFormBuilder.group({
      'description': teamForm.get('ideaForJob').value.trim(),
      'city': {
        'id': cities.find(city => city.name === teamForm.get('city').value).id,
        'name': teamForm.get('city').value
      },
      'category': teamForm.get('category').value.toUpperCase().replace(/ /g, '_'),
      'organization': teamForm.get('organization').value.trim(),
      'project': {}
    });
    const rawJsonFormValue = this.jsonForm.getRawValue();
    return this.adminIdeaServiceHttp.post<any>(rootApiUrl + '/admin/ideas', rawJsonFormValue);
  }
}
