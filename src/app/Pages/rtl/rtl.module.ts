import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RtlRoutingModule } from './rtl-routing.module';
import { RtlDefaultComponent } from './rtl-default/rtl-default.component';
import { DefaultCategoryComponent } from './default-category/default-category.component';
import { SearchComponent } from './search/search.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
       RtlDefaultComponent,
       DefaultCategoryComponent,
       SearchComponent
  ],
  imports: [
    CommonModule,
    RtlRoutingModule,
    SlickCarouselModule
  ]
})
export class RtlModule { }
