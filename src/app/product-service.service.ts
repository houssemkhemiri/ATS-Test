import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getAllProducts(pageNo: any, size: any): any {
    return this.http.get('http://localhost:8083/products?pageNo=' + pageNo.toString() + '&pageSize=' + size.toString());
  }

  getProductById(id: any): any {
    return this.http.get('http://localhost:8083/products/' + id.toString());
  }
}
