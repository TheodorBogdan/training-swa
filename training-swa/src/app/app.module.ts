import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardContentComponent } from './card-content/card-content.component';
import { AppButtonFooterComponent } from './button-footer/button-footer.component';
import { ProductsComponent } from './products/products.component';
import { ModalComponent } from './modal/modal.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    AboutComponent,
    NavBarComponent,
    CardContentComponent,
    AppButtonFooterComponent,
    ProductsComponent,
    ModalComponent,
    ListHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
