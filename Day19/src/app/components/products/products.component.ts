import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductsService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.log('Error', err),
    });
  }

  deleteItem(productId: number) {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter((prod) => prod.id != productId);
      },
    });
  }
  }
