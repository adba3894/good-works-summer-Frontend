import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobRegistrationService } from '../services/job-registration-service/job-registration.service';
import { CITIES_API_URL } from '../registration.const';
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
  organizationParam: string;
  descriptionParam;
  cityParam;
  categoryParam: string;
  public errorMsg;

  teamForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private jobRegistrationService: JobRegistrationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const organization = this.route.snapshot.paramMap.get('organization');
    this.organizationParam = organization;
    const description = this.route.snapshot.paramMap.get('description');
    this.descriptionParam = description;
    // const city = this.route.snapshot.paramMap.get('city');
    // this.cityParam = city;
    const category = this.route.snapshot.paramMap.get('category');
    this.categoryParam = category;
    this.jobRegistrationService.getCitiesData(CITIES_API_URL).subscribe(data => {
      this.cities = data;
    });
    this.jobRegistrationService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.teamForm = this.formBuilder.group({
      teamLeadName: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z][ąčęėįšųūž -ĄČĘĖĮŠŲŪŽ]+$'), Validators.maxLength(100)]],
      teamLeadEmail: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      teamName: ['', [Validators.required, Validators.maxLength(30)]],
      city: ['', Validators.required],
      organization: [this.organizationParam, [Validators.required, Validators.maxLength(100)]],
      ideaForJob: [this.descriptionParam, Validators.required],
      category: [this.categoryParam, Validators.required]
    });
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
      this.jobRegistrationService.submitForPost(this.teamForm, this.cities)
        .subscribe(() => {
          this.goToSuccess();
        }, (errorMessage) => {
          this.errorMsg = errorMessage.error.message;
        });
    }
  }
}
