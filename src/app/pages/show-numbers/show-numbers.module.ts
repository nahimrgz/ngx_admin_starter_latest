import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule } from '@angular/router';
import { ShowNumbersComponent } from './show-numbers.component';



@NgModule({
  declarations: [ShowNumbersComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgImageSliderModule,
    RouterModule,
  ],
})
export class ShowNumbersModule { }
