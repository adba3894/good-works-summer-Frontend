import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdeasPageService {

  constructor(private ideasPageServiceHttp: HttpClient) {
  }

  getCategoriesData(categoryApiUrl): Observable<any> {
    return this.ideasPageServiceHttp.get(categoryApiUrl);
  }

  getCitiesData(citiesApiUrl): Observable<any> {
    return this.ideasPageServiceHttp.get(citiesApiUrl);
  }

  getIdeasData(ideasApiUrl): Observable<any> {
    return this.ideasPageServiceHttp.get(ideasApiUrl);
  }
}
