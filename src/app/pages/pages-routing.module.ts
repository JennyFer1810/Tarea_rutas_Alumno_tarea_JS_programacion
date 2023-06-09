import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { PagesComponent } from './pages.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { TareaComponent } from './tarea/tarea.component';

const routes:Routes = [
  //rutas protegidas
  {path:'dashboard',
   component:PagesComponent,
   children:[  
   {path:'', component:DashboardComponent},  
   {path:'product', component:ProductComponent},  
   {path:'category', component:CategoryComponent},
   {path:'alumno', component:AlumnoComponent},
   {path:'tarea', component:TareaComponent},

   {path:'', redirectTo:'/dashboard', pathMatch:'full'},  
   //{path:'**', component:NoPagesFoundComponent},  
  ]},
  ]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
