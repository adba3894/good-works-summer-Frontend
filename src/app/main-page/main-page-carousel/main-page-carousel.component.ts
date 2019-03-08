import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page-carousel',
  templateUrl: './main-page-carousel.component.html',
  styleUrls: ['./main-page-carousel.component.css']
})
export class MainPageCarouselComponent implements OnInit {

  currentSlidePositionIndex = 1;

  constructor() {
  }

  ngOnInit() {
    this.showCurrentSlide(this.currentSlidePositionIndex);
  }

  showCurrentSlide(currentCarouselElementIndex: number) {
    const htmlCollectionOfCarouselElements: HTMLCollectionOf<any> = document.getElementsByClassName('carouselComponent');
    if (currentCarouselElementIndex > htmlCollectionOfCarouselElements.length) {
      this.currentSlidePositionIndex = 1;
    }
    if (currentCarouselElementIndex < 1) {
      this.currentSlidePositionIndex = htmlCollectionOfCarouselElements.length;
    }
    for (let carouselIterator = 0; carouselIterator < htmlCollectionOfCarouselElements.length; carouselIterator++) {
      htmlCollectionOfCarouselElements[carouselIterator].style.display = 'none';
    }
    htmlCollectionOfCarouselElements[this.currentSlidePositionIndex - 1].style.display = 'block';
  }

  navigateFromCurrentSlide(currentCarouselElementIndex: number) {
    this.showCurrentSlide(this.currentSlidePositionIndex += currentCarouselElementIndex);
  }
}
