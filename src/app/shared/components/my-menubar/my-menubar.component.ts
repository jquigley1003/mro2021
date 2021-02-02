import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ScreensizeService } from '../../services/screensize.service';

@Component({
  selector: 'app-my-menubar',
  templateUrl: './my-menubar.component.html',
  styleUrls: ['./my-menubar.component.scss'],
})
export class MyMenubarComponent implements OnInit, OnDestroy {
  isDesktop: boolean;
  screensizeSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private screensizeService: ScreensizeService
  ) {
    this.screensizeSub = this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if(this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    })
   }

  ngOnInit() {}

  goHome() {
    this.navCtrl.navigateBack('/');
  }

  goToAbout() {
    this.navCtrl.navigateForward('/about');
  }

  goToCredentials() {
    this.navCtrl.navigateForward('/credentials');
  }

  goToContact() {
    this.navCtrl.navigateForward('/contact');
  }

  ngOnDestroy() {
    this.screensizeSub.unsubscribe();
  }
}
