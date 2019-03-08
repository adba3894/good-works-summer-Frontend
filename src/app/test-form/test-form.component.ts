import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})

export class TestFormComponent implements OnInit {
  teamForm: FormGroup;

  private categoryApiUrl = 'https://good-works-summer-backend.herokuapp.com/initialdata/categories';
  private citiesApiUrl  = 'https://good-works-summer-backend.herokuapp.com/initialdata/cities';
  category = [];
  city = [];


  constructor(private http: Http, private router: Router) {
  }


  getData(ApiURL) {
    return this.http.get(ApiURL)
      .pipe(map((res: Response) => res.json()));
  }

  ngOnInit() {
    this.getCities();
    this.getCategories();
    this.teamForm = new FormGroup({
      teamLeadName: new FormControl(),
      teamLeadEmail: new FormControl(),
      teamName: new FormControl(),
      city: new FormControl(),
      organization: new FormControl(),
      ideaForJob: new FormControl(),
      category: new FormControl(),
    });
  }

  onSubmit(): void {
    console.log(this.teamForm.value);
    this.goToSuccess();
  }

  getCities() {
    this.getData(this.citiesApiUrl).subscribe(data => {
      this.city = data
    })
  }

  getCategories() {
    this.getData(this.categoryApiUrl).subscribe(data => {
      this.category = data
    })
  }

  goToHome() {
    this.router.navigateByUrl('');
  }

  goToSuccess() {
    this.router.navigateByUrl('registration/success');
  }
}
