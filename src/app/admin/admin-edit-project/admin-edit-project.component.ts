import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN_PROJECT_ENDPOINT, CATEGORY_API_URL, CITIES_API_URL } from '../../registration.const';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-admin-edit-project',
  templateUrl: './admin-edit-project.component.html',
  styleUrls: ['./admin-edit-project.component.css']
})
export class AdminEditProjectComponent implements OnInit {
  categories = [];
  cities = [];
  organizationParam = null;
  descriptionParam = null;
  categoryParam = null;
  cityParam;
  idParam: string;
  ideas = [];
  public errorMsg;

  teamForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminProjectService: AdminProjectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.adminProjectService.getCitiesData(CITIES_API_URL)
      .subscribe(data => {
        this.cities = data;
      });
    this.adminProjectService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.teamForm = this.formBuilder.group({
      id: [this.isValueNotNull(this.idParam)],
      teamLeadName: ['', [Validators.required,
        Validators.pattern('^([a-zA-Ząčęėįšųūž \\-ĄČĘĖĮŠŲŪŽ])+$'), Validators.maxLength(100)]],
      teamLeadEmail: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      teamName: ['', [Validators.required, Validators.maxLength(30)]],
      city: [this.isValueNotNull(this.cityParam), Validators.required],
      organization: [this.organizationParam, [Validators.required, Validators.maxLength(100)]],
      ideaForJob: [this.descriptionParam, Validators.required],
      category: [this.isValueNotNull(this.categoryParam), Validators.required]
    });
  }

  get registerFormControls() {
    return this.teamForm.controls;
  }

  goToAdminProject() {
    this.router.navigateByUrl(ADMIN_PROJECT_ENDPOINT);
  }

  onSubmit() {
    this.errorMsg = '';
    this.submitted = true;
    if (this.teamForm.valid) {
      this.adminProjectService.submitForPost(this.teamForm, this.cities, this.idParam)
        .subscribe(() => {
          this.goToAdminProject();
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
