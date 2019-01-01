import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  product:any = {};
  addVideo: any;
  http:HttpClient;
  isSuccess: boolean;
  hasError: boolean;

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
  }

  handleUpload(files) {
    console.log(files[0].name);
    this.product.file = files[0].name;
    console.log(this.product.file);
  }

  onSave() {

    this.productSvc.save(this.product.file)
    .subscribe(
      res => {
        this.product = {};
        this.hasError = false;
        this.isSuccess = true;
      },
      err => {
        this.isSuccess = false;
        this.hasError = true;
      });

    // const  form:FormData = new FormData();
    // form.append("video",this.product.file);

    // var hdrs = {};

    // return this.http.post("https://warm-woodland-33674.herokuapp.com/api/videoUpload",{headers:hdrs});
  }


}
