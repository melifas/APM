import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FixtureFormComponent } from './fixture-form/fixture-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FixtureFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
