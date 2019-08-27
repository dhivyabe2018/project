import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmaicComponent } from './dmaic.component';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { FormsModule } from '@angular/forms';
import { DmaicRoutingModule } from './dmaic-routing.module';
import { DmaicService } from './dmaic.service';


@NgModule({
  declarations: [DmaicComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonMaterialModule,
    DmaicRoutingModule
  ],
  providers: [DmaicService],
  exports: [DmaicComponent]
})
export class DmaicModule { }
