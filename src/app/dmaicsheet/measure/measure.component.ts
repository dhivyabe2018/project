import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Dmaic } from 'src/app/dmaic/dmaic';

@Component({
    selector: 'app-measure',
    templateUrl: './measure.component.html',
    styleUrls: ['./measure.component.css']
  })

export class MeasureComponent implements OnInit{
  public result = 0;
  @Input() dmaic: Dmaic;


  focusOut(){
    
  this.result=this.dmaic.measure.target - this.dmaic.measure.current;
  console.log('focusout:'+this.result);
  }
    
   ngOnInit() {
    this.result=this.dmaic.measure.target - this.dmaic.measure.current;
  }
  


}
