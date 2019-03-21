import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ADMIN_IDEAS_ENDPOINT,
  CATEGORY_API_URL,
  CITIES_API_URL
} from '../../registration.const';
import { AdminIdeaService } from '../../services/admin-idea-service/admin-idea.service';

@Component({
  selector: 'app-admin-edit-idea',
  templateUrl: './admin-edit-idea.component.html',
  styleUrls: ['./admin-edit-idea.component.css']
})
export class AdminEditIdeaComponent implements OnInit {
  categories = [];
  cities = [];
  organizationParam = null;
  descriptionParam = null;
  categoryParam = null;
  cityParam = null;
  idParam: string;
  projectIdParam: string;
  stateParam = null;
  ideas = [];
  public errorMsg;

  teamForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminIdeaService: AdminIdeaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if ( this.router.url !== '/admin/ideas/update') {
      const organization = this.route.snapshot.paramMap.get('organization');
      this.organizationParam = this.b64DecodeUnicode(organization);
      const category = this.route.snapshot.paramMap.get('category');
      this.categoryParam = this.b64DecodeUnicode(category);
      const city = this.route.snapshot.paramMap.get('city');
      this.cityParam = this.b64DecodeUnicode(city);
      const description = this.route.snapshot.paramMap.get('description');
      this.descriptionParam = this.b64DecodeUnicode(description);
      const id = this.route.snapshot.paramMap.get('id');
      this.idParam = this.b64DecodeUnicode(id);
      const projectId = this.route.snapshot.paramMap.get('projectId');
      this.projectIdParam = this.b64DecodeUnicode(projectId);
      const state = this.route.snapshot.paramMap.get('state');
      this.stateParam = this.b64DecodeUnicode(state);
    }
    this.adminIdeaService.getCitiesData(CITIES_API_URL)
      .subscribe(data => {
        this.cities = data;
      });
    this.adminIdeaService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.teamForm = this.formBuilder.group({
      id: [this.isValueNotNull(this.idParam)],
      city: [this.isValueNotNull(this.cityParam), Validators.required],
      organization: [this.isValueNotNull(this.organizationParam), [Validators.required, Validators.maxLength(100)]],
      ideaForJob: [this.isValueNotNull(this.descriptionParam), Validators.required],
      category: [this.isValueNotNull(this.categoryParam), Validators.required],
      projectId: [this.isValueNotNull(this.projectIdParam), Validators.required],
      state: [this.isValueNotNull(this.stateParam), Validators.required]
    });
  }

  b64DecodeUnicode(param) {
    return decodeURIComponent(atob(param).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  get adminIdeaFormControls() {
    return this.teamForm.controls;
  }

  goToAdminIdea() {
    this.router.navigateByUrl(ADMIN_IDEAS_ENDPOINT);
  }

  onSubmit() {
    this.errorMsg = '';
    this.submitted = true;
    if (this.teamForm.valid) {
      this.adminIdeaService.submitForEdit(this.teamForm, this.cities, this.idParam)
        .subscribe(() => {
          this.goToAdminIdea();
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
