import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private categoryApiUrl = 'https://good-works-summer-backend.herokuapp.com/initialdata/categories';
  private citiesApiUrl: any = 'https://good-works-summer-backend.herokuapp.com/initialdata/cities';
  categoryData: any = {};
  cityData: any = {};

  constructor(private http: Http, private router: Router) {

  }
  getData(ApiURL: any) {
    return this.http.get(ApiURL)
      .pipe(map((res: Response) => res.json()));
  }

  getCities() {
    this.getData(this.citiesApiUrl).subscribe(data => {
      this.cityData = data
    })
  }

  getCategories() {
    this.getData(this.categoryApiUrl).subscribe(data => {
      this.categoryData = data
    })
  }

  ngOnInit() {
    this.getCities();
    this.getCategories();
  }


  goToHome() {
    this.router.navigateByUrl('');
  }

  goToSuccess() {
    this.router.navigateByUrl('registration/success');
  }
}
