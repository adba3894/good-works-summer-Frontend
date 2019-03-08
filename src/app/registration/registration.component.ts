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
<<<<<<< HEAD
  categories = [];
  cities = [];
=======
  category = [];
  cities = [];

  teamForm: FormGroup;
>>>>>>> update registration form

  registerForm: FormGroup;
  submitted = false;

  constructor(private http: Http, private router: Router, private formBuilder: FormBuilder) {
<<<<<<< HEAD

  }
=======
>>>>>>> update registration fields

<<<<<<< HEAD
  ngOnInit() {
    this.getCities().subscribe(data => {
      this.cities = data;
    });
    this.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.registerForm = this.formBuilder.group({
      teamLeadName: ['', Validators.required],
      teamLeadEmail: ['', Validators.required],
      teamName: ['', Validators.required],
      city: ['', Validators.required],
      organization: ['', Validators.required],
      ideaForJob: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

=======
>>>>>>> update registration form
  getData(ApiURL) {
    return this.http.get(ApiURL)
      .pipe(map((res: Response) => res.json()));
  }

  getCities() {
<<<<<<< HEAD
    return this.getData(this.citiesApiUrl);
=======
    this.getData(this.citiesApiUrl).subscribe(data => {
      this.cities = data
    })
>>>>>>> update registration form
  }

  getCategories() {
    return this.getData(this.categoryApiUrl);
  }

<<<<<<< HEAD
  get registerFormControls() {
    return this.registerForm.controls;
  }

=======
  ngOnInit() {
    this.getCities();
    this.getCategories();
    this.teamForm = this.formBuilder.group({
      teamLeadName: new FormControl('John', [
        Validators.required,
        Validators.minLength(0),
  ]),
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

>>>>>>> update registration form
  goToHome() {
    this.router.navigateByUrl('');
  }

  goToSuccess() {
    this.router.navigateByUrl('registration/success');
    console.log(this.teamForm)
  }
<<<<<<< HEAD

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!!');
    this.goToSuccess();
  }
=======
  get f() { return this.teamForm.controls; }
>>>>>>> update registration fields
}
