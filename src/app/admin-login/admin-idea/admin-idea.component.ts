import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminIdeaService } from '../../services/admin-idea-service/admin-idea.service';
import { CATEGORY_API_URL, CITIES_API_URL, ROOT_API_URL } from '../../registration.const';

@Component({
  selector: 'app-admin-idea',
  templateUrl: './admin-idea.component.html',
  styleUrls: ['./admin-idea.component.css']
})
export class AdminIdeaComponent implements OnInit {
  categories = [];
  cities = [];
  teamForm: FormGroup;
  submitted = false;
  public SuccessMsg;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private adminIdeaService: AdminIdeaService) {
  }

  ngOnInit() {
    this.adminIdeaService.getCitiesData(CITIES_API_URL).subscribe(data => {
      this.cities = data;
    });
    this.adminIdeaService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.teamForm = this.formBuilder.group({
      city: [],
      organization: [],
      ideaForJob: [],
      category: []
    });
  }

  onSubmit() {
    this.SuccessMsg = '';
    this.submitted = true;
    if (this.teamForm.valid) {
      this.adminIdeaService.submitForPost(this.teamForm, this.cities, ROOT_API_URL)
        .subscribe(() => {
          this.SuccessMsg = 'Idea successfully submitted';
        });
    }
  }
  goToAdminIdea() {
    this.router.navigateByUrl('/admin/idea');
  }

  goToAdminProject() {
    this.router.navigateByUrl('/admin/project');
  }
}
