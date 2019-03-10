import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  submitted = false;

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
      teamLeadName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
      teamLeadEmail: ['', [Validators.required, Validators.email]],
      teamName: ['', [Validators.required, Validators.maxLength(30)]],
      city: ['', Validators.required],
      organization: ['', Validators.required],
      ideaForJob: ['', Validators.required],
      category: ['', Validators.required],
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

  get registerFormControls() {
    return this.teamForm.controls;
  }

  goToHome() {
    this.router.navigateByUrl('');
  }

  goToSuccess() {
    this.router.navigateByUrl('registration/success');
  }

  onSubmit() {
    this.submitted = true;
    if (this.teamForm.invalid) {
      return;
    }
    alert('SUCCESS!!');
    this.goToSuccess();
  }
}
