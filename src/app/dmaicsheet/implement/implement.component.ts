import { Component, OnInit, Input } from '@angular/core';
import { Dmaic } from 'src/app/dmaic/dmaic';

@Component({
     selector: 'app-implement',
    templateUrl: './implement.component.html',
    styleUrls: ['./implement.component.css']
  })
export class ImplementComponent {

   @Input() dmaic: Dmaic;

}