import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmaicSheetComponent } from './dmaicsheet.component';
import { DefineComponent } from './define/define.component';
import { MeasureComponent } from './measure/measure.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ImplementComponent } from './implement/implement.component';
import { ControlComponent } from './control/control.component';

const routes: Routes = [
  { path: '', component: DmaicSheetComponent, children:[
    { path: 'define', component: DefineComponent },
    { path: 'measure', component: MeasureComponent },
    { path: 'analyse', component: AnalyseComponent },
    { path: 'implement', component: ImplementComponent },
    { path: 'control', component: ControlComponent },
  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmaicSheetRoutingModule { }
