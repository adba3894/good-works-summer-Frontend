import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private categoryApiUrl = 'https://good-works-summer-backend.herokuapp.com/initialdata/categories';
  private citiesApiUrl = 'https://good-works-summer-backend.herokuapp.com/initialdata/cities';
  categories = [];
  cities = [];

  teamForm: FormGroup;

  constructor(private http: Http, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.getCities().subscribe(data => {
      this.cities = data;
    });
    this.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.teamForm = this.formBuilder.group({
      teamLeadName: new FormControl(),
      teamLeadEmail: new FormControl(),
      teamName: new FormControl(),
      city: new FormControl(),
      organization: new FormControl(),
      ideaForJob: new FormControl(),
      category: new FormControl(),
    });
  }

  getData(ApiURL) {
    return this.http.get(ApiURL)
      .pipe(map((res: Response) => res.json()));
  }

  getCities() {
    return this.getData(this.citiesApiUrl);
  }

  getCategories() {
    return this.getData(this.categoryApiUrl);
  }

  onSubmit(): void {
    console.log(this.teamForm.value);
    this.goToSuccess();
  }

  goToHome() {
    this.router.navigateByUrl('');
  }

  goToSuccess() {
    this.router.navigateByUrl('registration/success');
    console.log(this.teamForm)
  }
}
