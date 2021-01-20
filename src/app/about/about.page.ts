import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  showEngine: boolean = false;
  showDamage: boolean = false;
  showWarranty: boolean = false;
  showInsurance: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleEngine() {
    this.showEngine = !this.showEngine;
  }

  toggleDamage() {
    this.showDamage = !this.showDamage; 
  }

  toggleWarranty() {
    this.showWarranty = !this.showWarranty;
  }
  
  toggleInsurance() {
    this.showInsurance = !this.showInsurance;
  }

}
