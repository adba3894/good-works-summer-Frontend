import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminIdeaService } from '../../services/admin-idea-service/admin-idea.service';
import {
  ADMIN_IDEAS_ADD_ENDPOINT,
  ADMIN_IDEAS_ENDPOINT,
  ADMIN_PROJECT_ENDPOINT,
  CATEGORY_API_URL,
  CITIES_API_URL
} from '../../registration.const';

@Component({
  selector: 'app-admin-idea-add',
  templateUrl: './admin-idea-add.component.html',
  styleUrls: ['./admin-idea-add.component.css']
})
export class AdminIdeaAddComponent implements OnInit {
  categories = [];
  cities = [];
  teamForm: FormGroup;
  submitted = false;
  public successMsg;
  public errorMsg;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminIdeaService: AdminIdeaService) {
  }

  ngOnInit() {
    this.adminIdeaService.getCitiesData(CITIES_API_URL)
      .subscribe(data => {
      this.cities = data;
    });
    this.adminIdeaService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.teamForm = this.formBuilder.group({
      city: ['', Validators.required],
      organization: ['', [Validators.required, Validators.maxLength(100)]],
      ideaForJob: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    this.errorMsg = '';
    this.successMsg = '';
    this.submitted = true;
    if (this.teamForm.valid) {
      this.adminIdeaService.submitForPost(this.teamForm, this.cities)
        .subscribe(() => {
          this.successMsg = 'Idea registered successfully'
        }, (errorMessage) => {
          this.errorMsg = errorMessage.error.message;
        });
    }
  }

  goToAdminIdea() {
    this.router.navigateByUrl(ADMIN_IDEAS_ENDPOINT);
  }

  goToAdminNewIdea() {
    this.router.navigateByUrl(ADMIN_IDEAS_ADD_ENDPOINT);
  }

  goToAdminProject() {
    this.router.navigateByUrl(ADMIN_PROJECT_ENDPOINT);
  }
}
