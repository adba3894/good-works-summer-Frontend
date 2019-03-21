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
  cityParam = null;
  teamLeadNameParam = null;
  teamLeadEmailParam = null;
  teamNameParam = null;
  idParam: string;
  ideaParam = null;
  ideas = [];
  public errorMsg;

  teamForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminProjectService: AdminProjectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if ( this.router.url !== '/admin/project/update') {
      const organization = this.route.snapshot.paramMap.get('organization');
      this.organizationParam = this.b64DecodeUnicode(organization);
      const category = this.route.snapshot.paramMap.get('category');
      this.categoryParam = this.b64DecodeUnicode(category);
      const city = this.route.snapshot.paramMap.get('city');
      this.cityParam = this.b64DecodeUnicode(city);
      const teamLeadName = this.route.snapshot.paramMap.get('leadName');
      this.teamLeadNameParam = this.b64DecodeUnicode(teamLeadName);
      const teamLeadEmail = this.route.snapshot.paramMap.get('leadEmail');
      this.teamLeadEmailParam = this.b64DecodeUnicode(teamLeadEmail);
      const teamName = this.route.snapshot.paramMap.get('teamName');
      this.teamNameParam = this.b64DecodeUnicode(teamName);
      const description = this.route.snapshot.paramMap.get('description');
      this.descriptionParam = this.b64DecodeUnicode(description);
      const id = this.route.snapshot.paramMap.get('id');
      this.idParam = this.b64DecodeUnicode(id);
    }
    this.adminProjectService.getCitiesData(CITIES_API_URL)
      .subscribe(data => {
        this.cities = data;
      });
    this.adminProjectService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.teamForm = this.formBuilder.group({
      teamLeadName: [this.isValueNotNull(this.teamLeadNameParam), [Validators.required,
        Validators.pattern('^([a-zA-Ząčęėįšųūž \\-ĄČĘĖĮŠŲŪŽ])+$'), Validators.maxLength(100)]],
      teamLeadEmail: [this.isValueNotNull(this.teamLeadEmailParam), [Validators.required, Validators.email, Validators.maxLength(100)]],
      teamName: [this.isValueNotNull(this.teamNameParam), [Validators.required, Validators.maxLength(30)]],
      city: [this.isValueNotNull(this.cityParam), Validators.required],
      organization: [this.isValueNotNull(this.organizationParam), [Validators.required, Validators.maxLength(100)]],
      ideaForJob: [this.isValueNotNull(this.descriptionParam), Validators.required],
      category: [this.isValueNotNull(this.categoryParam), Validators.required]
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
