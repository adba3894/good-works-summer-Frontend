import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeasPageService {

  constructor(private ideasPageServiceHttp: HttpClient) {
  }

  getIdeasData(ideasApiUrl): Observable<any> {
    return this.ideasPageServiceHttp.get(ideasApiUrl);
  }

  getCitiesData(citiesApiUrl): Observable<any> {
    return this.ideasPageServiceHttp.get(citiesApiUrl);
  }
}
