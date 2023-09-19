import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) {}
productId: number = 0;
  product: Product = {
    "id": 1,
    "name": "makeup",
    "price": 200,
    "quantity": 5
  };
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
      }
    })
  }
}
