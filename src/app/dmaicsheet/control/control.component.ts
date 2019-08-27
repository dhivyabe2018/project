import { Component, OnInit, Input } from '@angular/core';
import { Dmaic } from 'src/app/dmaic/dmaic';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
@Input() dmaic: Dmaic;

}
