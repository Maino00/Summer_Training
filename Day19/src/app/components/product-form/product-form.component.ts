import { ProductsService } from './../../services/products/products.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}
  productID: number = 0;
  ngOnInit(): void {
    this.productID = this.activatedRoute.snapshot.params['id'];
    if (this.productID != 0) {
      // edit
      this.productService.getProductById(this.productID).subscribe({
        next: (data) => {
          this.productName = data.name;
          this.productPrice = data.price;
          this.productQuantity = data.quantity;
        },
      });
    }
  }

  productName: string = '';
  productPrice: number = 0;
  productQuantity: number = 0;

  SaveData(e: any) {
    e.preventDefault();
    if (this.productID == 0) {
      //add
      const newProduct: Product = {
        id: 0,
        name: this.productName,
        price: this.productPrice,
        quantity: this.productQuantity,
      };
      this.productService.addProduct(newProduct).subscribe();
    } else {
      //edit
      const editProduct: Product = {
        id: this.productID,
        name: this.productName,
        price: this.productPrice,
        quantity: this.productQuantity,
      };
      this.productService.editProduct(this.productID, editProduct).subscribe();
    }

    this.router.navigate(['/products']);
  }
}
