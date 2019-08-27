import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmaicComponent } from './dmaic.component';


const routes: Routes = [
 { path:'dmaic', component: DmaicComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmaicRoutingModule { }
