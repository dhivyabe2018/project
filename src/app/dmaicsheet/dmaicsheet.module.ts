import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { FormsModule } from '@angular/forms';
import { DmaicSheetComponent } from './dmaicsheet.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ImplementComponent } from './implement/implement.component';
import { ControlComponent } from './control/control.component';
import { DefineComponent } from './define/define.component';
import { MeasureComponent } from './measure/measure.component';
import { DmaicSheetRoutingModule } from './dmaicsheet-routing.module';


@NgModule({
  declarations: [DmaicSheetComponent,
    DefineComponent,
    MeasureComponent,
    AnalyseComponent,
    ImplementComponent,
    ControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonMaterialModule,
    DmaicSheetRoutingModule
  ],
  providers: [],
  exports: [DmaicSheetComponent,DefineComponent,
    MeasureComponent,
    AnalyseComponent,
    ImplementComponent,
    ControlComponent]
})
export class DmaicSheetModule { }
