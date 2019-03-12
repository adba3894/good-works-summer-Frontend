import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectService {

  constructor(private adminProjectHttp: Http, private adminProjectFormBuilder: FormBuilder) {

  }

  getData(tableApiUrl: string) {
    return this.adminProjectHttp.get(tableApiUrl)
      .pipe(map((res: Response) => res.json()));
  }


}
