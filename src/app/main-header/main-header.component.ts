import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRegistration() {
    this.router.navigateByUrl('/registration');
  }
}
