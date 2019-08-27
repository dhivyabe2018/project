import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loginUser = '';
  constructor(private authService:AuthService) { }


  ngOnInit() {
    this.authService.loginUserObservable$.subscribe(loginUser => this.loginUser= loginUser);
  }

}
