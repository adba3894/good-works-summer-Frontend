import {Component, Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private apiUrl = 'https://good-works-summer-backend.herokuapp.com/initialdata/categories?fbcl' +
    'id=IwAR0hQ7jbFgoTIp4A9DVA_sssOcn2Ng0vOMUTTB0ZatH01xxSUxs8RWZcl7A'
  data: any = {};
  category: string;

  constructor(private http: Http) {
    this.getCategories();
    this.getDataaa();
  }

  getDataaa() {
    return this.http.get(this.apiUrl)
      .pipe(map((res: Response) => res.json()));
  }

  getCategories() {
    this.getDataaa().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }


}
