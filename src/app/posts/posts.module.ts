import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
