import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MyMenubarModule } from '../shared/components/my-menubar/my-menubar.module';
import { FooterModule } from '../shared/components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyMenubarModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
