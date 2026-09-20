import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contact } from './contact/contact';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { FormsModule } from '@angular/forms';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { Homework } from './homework/homework';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { provideHttpClient } from '@angular/common/http'; // Đã có sẵn dòng này
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEventComponent } from './bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './bai13/service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductCatalogComponent } from './bai14/service-product-catalog/service-product-catalog';
import { ServiceGroupCustomersComponent } from './bai18/service-group-customers/service-group-customers';
@NgModule({
  declarations: [
    App,
    Contact,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    Homework,
    ProductListComponent,
    ProductDropdownListComponent,
    ProductHttpHandleErrorServiceComponent,
    ServiceGroupCustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    ServiceProductCatalogComponent,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
