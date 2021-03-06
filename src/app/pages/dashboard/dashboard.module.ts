import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgImageSliderModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
