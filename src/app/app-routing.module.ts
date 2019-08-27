import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dmaic/dmaicsheet/:id', loadChildren: './dmaicsheet/dmaicsheet.module#DmaicSheetModule'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
