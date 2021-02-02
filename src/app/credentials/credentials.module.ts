import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredentialsPageRoutingModule } from './credentials-routing.module';

import { CredentialsPage } from './credentials.page';
import { MyMenubarModule } from '../shared/components/my-menubar/my-menubar.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredentialsPageRoutingModule,
    MyMenubarModule,
    FooterModule
  ],
  declarations: [CredentialsPage]
})
export class CredentialsPageModule {}
