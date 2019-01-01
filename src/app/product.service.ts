import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

  public reviews: any[];

  constructor(private http: HttpClient) {
  }

  save(product: any) {

    const form: FormData = new FormData();

    form.append("video", product.file);

    var hdrs = {};

    return this.http.post("https://warm-woodland-33674.herokuapp.com/api/videoUpload",form);
  }

}