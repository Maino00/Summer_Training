import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/products';

  getAllProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  editProduct(id: number, product: Product) {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  addProduct(product: Product) {
    return this.http.post(this.baseUrl, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
