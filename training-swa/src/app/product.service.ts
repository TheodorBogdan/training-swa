import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products = new BehaviorSubject<Product[]>([]);

  public entities$: Observable<Product[]>;

  constructor(
    private readonly http: HttpClient
  ) {
    this.entities$ = this._products.asObservable();
  }

  public setProducts(products: Product[]) {
    this._products.next(products);
  }

  public getAll(): Observable<any> {
    return this.http.get<Product[]>(`${environment.apiUrl}`)
      .pipe(tap((t: Product[]) => this._products.next(t)));
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
