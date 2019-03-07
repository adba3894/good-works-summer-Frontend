import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page-carousel',
  templateUrl: './main-page-carousel.component.html',
  styleUrls: ['./main-page-carousel.component.css']
})
export class MainPageCarouselComponent implements OnInit {

  constructor() {
  }

  slideIndex: number = 1;

  showDivs(currentCarouselElementIndex: number) {
    let iteratorForCarousel: number;
    let HTMLCollectionOfCarouselElements: HTMLCollectionOf<any> = document.getElementsByClassName('carouselComponent');
    if (currentCarouselElementIndex > HTMLCollectionOfCarouselElements.length) {
      this.slideIndex = 1;
    }
    if (currentCarouselElementIndex < 1) {
      this.slideIndex = HTMLCollectionOfCarouselElements.length;
    }
    for (iteratorForCarousel = 0; iteratorForCarousel < HTMLCollectionOfCarouselElements.length; iteratorForCarousel++) {
      HTMLCollectionOfCarouselElements[iteratorForCarousel].style.display = 'none';
    }
    HTMLCollectionOfCarouselElements[this.slideIndex - 1].style.display = 'block';
    console.log('showdivs');
  }

  plusDivs(currentCarouselElementIndex: number) {
    this.showDivs(this.slideIndex += currentCarouselElementIndex);
    console.log('plusdivs');
  }

  ngOnInit() {
    this.showDivs(this.slideIndex);
  }
}
