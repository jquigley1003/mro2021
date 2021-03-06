import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { MyMenubarModule } from '../shared/components/my-menubar/my-menubar.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { ContactFormModule } from '../shared/components/contact-form/contact-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    MyMenubarModule,
    FooterModule,
    ContactFormModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
