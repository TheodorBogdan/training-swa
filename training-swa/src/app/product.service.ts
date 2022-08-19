import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products = new BehaviorSubject<Product[]>([]);

  public entities$: Observable<Product[]>;

  constructor() {
    this.entities$ = this._products.asObservable();
  }

  public setProducts(products: Product[]) {
    this._products.next(products);
  }

  public getAll(): Observable<any> {
    return this.entities$;
  }

  public add(product: Product): void {
    this._products.next([...this._products.value, product]);
  }

  public update(product: Product): void {
    // this._products.next([...this._products.value, product]);
  }

  public delete(product: Product): Observable<any> {
    this._products.next([...this._products.value.filter(t => t.id != product.id)]);

    return of();
  }
}
