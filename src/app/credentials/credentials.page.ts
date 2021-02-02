import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.page.html',
  styleUrls: ['./credentials.page.scss'],
})
export class CredentialsPage implements OnInit {
  @ViewChild(IonSlides) slides:IonSlides;

  showPrevNext:boolean = false;

  slideOpts = {
    autoplay: {
      delay: 3000,
    },
    loop: true
  }

  constructor() { }

  ngOnInit() {
  }

  // ionViewWillLeave() {
  //   this.slides.stopAutoplay();
  // }

  // ionViewDidEnter() {
  //   this.slides.startAutoplay();
  // }

  toPrevSlide() {
    this.slides.slidePrev();
  }

  toNextSlide() {
    this.slides.slideNext();
  }

  slideStart() {
    console.log("You started the slider");
    this.slides.startAutoplay();
    this.showPrevNext = false;
  }

  slideStop() {
    console.log("You stopped the slider");
    this.slides.stopAutoplay();
    this.showPrevNext = true;
  }
}
