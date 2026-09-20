import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ServiceProductImageEventDetailComponent } from './bai13/service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEventComponent } from './bai13/service-product-image-event/service-product-image-event';

const routes: Routes = [
  {path:"learn-directive", component: ProductListComponent},
  {path:"product-dropdown-list", component: ProductDropdownListComponent},
  {path: 'service-product-image-event', component: ServiceProductImageEventComponent},
  {path: 'service-product-image-event/:id',  component: ServiceProductImageEventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
