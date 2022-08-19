import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  errorMessage?: string;
  selected?: Product;
  products$: Observable<Product[]>;
  message = '?';
  productToDelete?: Product;
  showModal = false;

  constructor(private productService: ProductService) {
    this.products$ = productService.entities$;
  }

  ngOnInit() {
    this.getProducts();
  }

  add(product: Product) {
    this.productService.add(product);
  }

  askToDelete(product: Product) {
    this.productToDelete = product;
    this.showModal = true;
    if (this.productToDelete.name) {
      this.message = `Would you like to delete ${this.productToDelete.name}?`;
    }
  }

  clear() {
    this.selected = undefined;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteProduct() {
    this.closeModal();
    if (this.productToDelete) {
      this.productService
        .delete(this.productToDelete)
        .subscribe(() => (this.productToDelete = undefined));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  async getProducts() {
    this.errorMessage = undefined;
    this.productService.getAll().subscribe(
      (_) => {
        /*.. do nothing for success.. */
      },
      (error: any) => (this.errorMessage = 'Unauthorized'),
    );
    this.clear();
  }

  save(product: Product) {
    if (this.selected && this.selected.name) {
      this.update(product);
    } else {
      this.add(product);
    }
  }

  select(product: Product) {
    this.selected = product;
  }

  update(product: Product) {
    this.productService.update(product);
  }
}