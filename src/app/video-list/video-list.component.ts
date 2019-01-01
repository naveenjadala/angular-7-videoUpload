import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  VideoList:any;

  constructor(http:HttpClient) {
    
    this.VideoList = http.get("https://warm-woodland-33674.herokuapp.com/api/videosList");
   }

  ngOnInit() {
  }

}
