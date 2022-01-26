import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data: any;
  constructor(private apiService: ProductServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getProductById(id).subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }

}
