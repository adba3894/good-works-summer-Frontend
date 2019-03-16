import { Component, OnInit } from '@angular/core';
import { CATEGORY_API_URL, CITIES_API_URL, IDEAS_API_URL, TEAMS_API_URL } from '../registration.const';
import { IdeasPageService } from '../services/ideas-page-service/ideas-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ideas-page',
  templateUrl: './ideas-page.component.html',
  styleUrls: ['./ideas-page.component.css']
})
export class IdeasPageComponent implements OnInit {
  cities = [];
  categories = [];
  ideas = [];

  constructor(private ideasPageService: IdeasPageService, private router: Router) {
  }


  ngOnInit() {
    this.ideasPageService.getCitiesData(CITIES_API_URL).subscribe(data => {
      this.cities = data;
    });
    this.ideasPageService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
    this.ideasPageService.getIdeasData(IDEAS_API_URL)
      .subscribe(data => {
        this.ideas = data;
      });
  }

  onSelect(organization, description, city, category) {
    this.router.navigate(['/registration', organization, description, city, category]);
  }
}
