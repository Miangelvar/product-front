import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../_model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  PRODUCT_ATTRIBUTES: string[] = ["id", "name", "description"];
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

}
