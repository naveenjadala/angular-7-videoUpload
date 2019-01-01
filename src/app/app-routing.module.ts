import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  { path: '', component: VideoListComponent},
  { path: 'addVideo', component: AddVideoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
