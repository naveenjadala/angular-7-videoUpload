import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { NavComponent } from './nav/nav.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    AddVideoComponent,
    VideoListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
