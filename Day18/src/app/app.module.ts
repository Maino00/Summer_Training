import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsCardComponent } from './components/products/products-card/products-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ChildComponent } from './components/home/child/child.component';
import { SecondChildComponent } from './components/home/second-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductsCardComponent,
    ProductDetailsComponent,
    ChildComponent,
    SecondChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
