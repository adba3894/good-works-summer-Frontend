import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  constructor(private progressBarServiceHttp: HttpClient) { }

  getCounterData(progressDataApiUrl): Observable<any> {
    return this.progressBarServiceHttp.get(progressDataApiUrl);
  }
}
