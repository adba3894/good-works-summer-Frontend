import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobRegistrationService } from '../services/job-registration-service/job-registration.service';
import { ROOT_API_URL } from '../registration.const';
import { CITIES_API_URL } from '../registration.const';
import { CATEGORY_API_URL } from '../registration.const';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  categories = [];
  cities = [];
  public errorMsg;

  teamForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private jobRegistrationService: JobRegistrationService) {
  }

  ngOnInit() {
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
      organization: ['', [Validators.required, Validators.maxLength(100)]],
      ideaForJob: ['', Validators.required],
      category: ['', Validators.required]
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
