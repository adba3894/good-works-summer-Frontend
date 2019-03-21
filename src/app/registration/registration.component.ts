import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobRegistrationService } from '../services/job-registration-service/job-registration.service';
import { CITIES_API_URL, IDEAS_API_URL } from '../registration.const';
import { CATEGORY_API_URL } from '../registration.const';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  categories = [];
  cities = [];
  organizationParam = null;
  descriptionParam = null;
  categoryParam = null;
  cityParam;
  idParam: number;
  ideas = [];
  public errorMsg;

  teamForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private jobRegistrationService: JobRegistrationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if ( this.router.url !== '/registration') {
      const organization = this.route.snapshot.paramMap.get('organization');
      this.organizationParam = this.b64DecodeUnicode(organization);
      const description = this.route.snapshot.paramMap.get('description');
      this.descriptionParam = this.b64DecodeUnicode(description);
      const city = this.route.snapshot.paramMap.get('city');
      this.cityParam = this.b64DecodeUnicode(city);
      const category = this.route.snapshot.paramMap.get('category');
      this.categoryParam = this.b64DecodeUnicode(category);
      const id = this.route.snapshot.paramMap.get('id');
      this.idParam = this.b64DecodeUnicode(id);
      console.log(this.idParam);
      console.log('what');
    }
    this.jobRegistrationService.getCitiesData(CITIES_API_URL).subscribe(data => {
      this.cities = data;
    });
    this.jobRegistrationService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.teamForm = this.formBuilder.group({
      teamLeadName: ['', [Validators.required,
        Validators.pattern('^([a-zA-Ząčęėįšųūž \\-ĄČĘĖĮŠŲŪŽ])+$'), Validators.maxLength(100)]],
      teamLeadEmail: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      teamName: ['', [Validators.required, Validators.maxLength(30)]],
      city: [this.isValueNotNull(this.cityParam), Validators.required],
      organization: [this.organizationParam, [Validators.required, Validators.maxLength(100)]],
      ideaForJob: [this.descriptionParam, Validators.required],
      category: [this.isValueNotNull(this.categoryParam), Validators.required]
    });
    this.jobRegistrationService.getIdeasData(IDEAS_API_URL)
      .subscribe(data => {
        this.ideas = data;
      });
  }

  b64DecodeUnicode(param) {
    return decodeURIComponent(atob(param).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  get registerFormControls() {
    return this.teamForm.controls;
  }

  goToHome() {
    this.router.navigateByUrl('');
  }

  goToSuccess() {
    this.router.navigateByUrl('registration/success');
  }

  onSubmit() {
    this.errorMsg = '';
    this.submitted = true;
    if (this.teamForm.valid) {
      console.log(this.idParam);
      this.jobRegistrationService.submitForPost(this.teamForm, this.cities, this.idParam)
        .subscribe(() => {
          this.goToSuccess();
        }, (errorMessage) => {
          this.errorMsg = errorMessage.error.message;
        });
    }
  }

  isValueNotNull(param) {
    if (param == null) {
      return '';
    } else {
      return param;
    }
  }

}
