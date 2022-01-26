import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  data: any;
  constructor(private apiService: ProductServiceService) { }
  ngOnInit(): void {
    this.apiService.getAllProducts(0, 20).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data)
    });
  }

}
