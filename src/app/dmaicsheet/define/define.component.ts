import { Component, OnInit, Input } from '@angular/core';
import { Dmaic } from 'src/app/dmaic/dmaic';


@Component({
  selector: 'app-define',
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.css']
})
export class DefineComponent {

  @Input() dmaic: Dmaic;

 
}
