import { Component, OnInit } from '@angular/core';
import { DmaicService } from './dmaic.service';
import { HttpClient } from '@angular/common/http';
import { Dmaic } from './dmaic';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-dmaic',
  templateUrl: './dmaic.component.html',
  styleUrls: ['./dmaic.component.css']
})
export class DmaicComponent implements OnInit {
  public dmaics:Dmaic[] = [];
  constructor(private dmaicService: DmaicService,
    private authService: AuthService,
    private http:HttpClient) { }

  ngOnInit() {
    let loginUser = this.authService.getLoginUser();
    console.log('loginUser:'+JSON.stringify(loginUser));
    this.dmaicService.getDetails(loginUser)
    .subscribe(data => {
      this.dmaics = data;
      this.dmaicService.setData(this.dmaics);
      console.log("1::"+JSON.stringify(this.dmaics));
    });
  }

}
