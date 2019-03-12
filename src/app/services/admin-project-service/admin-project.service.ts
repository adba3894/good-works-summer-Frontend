import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectService {
  readonly tableApiUrl = 'https://good-works-summer-backend.herokuapp.com';
  teams = [];

  constructor(private adminProjectHttp: Http) { }

  getData(tableApiUrl) {
    return this.adminProjectHttp.get(tableApiUrl)
      .pipe(map((res: Response) => res.json()));
  }

  

}
