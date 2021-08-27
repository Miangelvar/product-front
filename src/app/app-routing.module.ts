import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {DepartmentComponent} from "./department/department.component";

const routes: Routes = [
  {path: "products", component: ProductComponent},
  {path: "departments", component: DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
