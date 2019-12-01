import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { PeopelDetailComponent } from '../peopleDetail/peopel-detail/peopel-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
      },
      {
        path: 'detail',
        component: PeopelDetailComponent,
      }
    ])
  ],
  declarations: [ListPage, PeopelDetailComponent]
})
export class ListPageModule {}
