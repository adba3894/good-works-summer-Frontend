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
  value;

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
    this.value = 0;
  }

  onSelect(organization, description, category, city, id) {
    console.log(id);
    this.router.navigate([
      '/registration',
      this.b64EncodeUnicode(organization),
      this.b64EncodeUnicode(description),
      this.b64EncodeUnicode(category),
      this.b64EncodeUnicode(city),
      this.b64EncodeUnicode(id)]);
  }

  b64EncodeUnicode(param) {
    return btoa(encodeURIComponent(param).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(Number('0x' + p1));
      }));
  }

  getBeautifulEnvironmentData() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/BEAUTIFUL_ENVIRONMENT' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
    this.value = 4;
  }

  getGivingBackToSociety() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/GIVING_BACK_TO_SOCIETY' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
    this.value = 1;
  }

  getHelpingAnimalsData() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/HELPING_ANIMALS' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
    this.value = 2;
  }

  getSharingKnowledge() {
    this.ideasPageService.getIdeasData(FILTERED_IDEAS_API_URL + '/SHARING_KNOWLEDGE' + '/free')
      .subscribe(data => {
        this.ideas = data;
      });
    this.value = 3;
  }

  goToFaq() {
    this.router.navigateByUrl('/faq');
  }

}
