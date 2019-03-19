import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CITIES_API_URL, FILTERED_IDEAS_API_URL, FREE_IDEAS_API_URL } from '../registration.const';
import { IdeasPageService } from '../services/ideas-page-service/ideas-page.service';

@Component({
  selector: 'app-ideas-page',
  templateUrl: './ideas-page.component.html',
  styleUrls: ['./ideas-page.component.css']
})
export class IdeasPageComponent implements OnInit {

  ideas = [];
  cities = [];


  constructor(private router: Router, private ideasPageService: IdeasPageService) {
  }

  ngOnInit() {
    this.ideasPageService.getCitiesData(CITIES_API_URL).subscribe(data => {
      this.cities = data;
    });
    this.ideasPageService.getIdeasData(FREE_IDEAS_API_URL)
      .subscribe(data => {
        this.ideas = data;
      });
  }

  onSelect(organization, description, category, city, cityId, id) {
    this.router.navigate(['/registration', organization, description, category, city, cityId, id]);
  }

  get_beautiful_environment_data() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/BEAUTIFUL_ENVIRONMENT' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
  }

  get_giving_back_data() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/GIVING_BACK_TO_SOCIETY' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
  }

  get_helping_animals_data() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/HELPING_ANIMALS' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
  }

  get_sharing_knowledge_data() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/SHARING_KNOWLEDGE' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
  }

  goToFaq() {
    this.router.navigateByUrl('/faq');
  }

}
