import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-carousel',
  templateUrl: './main-page-carousel.component.html',
  styleUrls: ['./main-page-carousel.component.css']
})
export class MainPageCarouselComponent implements OnInit {

  constructor() { 
  }

  slideIndex: number = 1;

  showDivs(n: number) {
    let i: number;
    let x: HTMLCollectionOf<any> = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex - 1].style.display = "block";
    console.log("showdivs");
  }

  plusDivs(n: number) {
    this.showDivs(this.slideIndex += n);
    console.log("plusdivs");
  }

  ngOnInit() {
    this.showDivs(this.slideIndex);
  }
}
