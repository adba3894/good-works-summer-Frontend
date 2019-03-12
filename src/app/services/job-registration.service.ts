import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class JobRegistrationService {

  jsonForm: FormGroup;

  constructor(private jobRegistrationServiceHttp: Http, private jobRegistrationServiceFormBuilder: FormBuilder) {

  }

  submitForPost(teamForm: FormGroup, cities: any[], rootApiUrl: string) {
    if (teamForm.valid) {
      this.jsonForm = this.jobRegistrationServiceFormBuilder.group({	
        'leadName': teamForm.get('teamLeadName').value,
        'leadEmail': teamForm.get('teamLeadEmail').value,
        'teamName': teamForm.get('teamName').value,
        'city': { 
          'id': cities.find(city => city.name == teamForm.get('city').value).id,
          'name': teamForm.get('city').value
        },
        'ideas': [[{
          'description': teamForm.get('ideaForJob').value,
          'project': {
            'category': teamForm.get('category').value.toUpperCase().replace(/ /g,'_')
          }
        }]],
        'organization': teamForm.get('organization').value
      });
      let rawJsonFormValue = this.jsonForm.getRawValue();
      this.jobRegistrationServiceHttp.post(rootApiUrl + '/registration', rawJsonFormValue).subscribe(res => {
      });
    }
  }
}
