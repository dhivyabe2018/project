import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-analyse',
    templateUrl: './analyse.component.html',
    styleUrls: ['./analyse.component.css']
  })
export class AnalyseComponent implements OnInit{
@Input() result: number;
@Input() dmaic: any;

  constructor(){}

ngOnInit() {
   
  }
}

