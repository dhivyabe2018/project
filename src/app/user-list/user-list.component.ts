import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../shared/services/userlist.service';
import { User } from '../shared/model/user.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
//public users:User[] = [];
  public users: any;
  constructor(private userlistService: UserlistService, private http: HttpClient) { }
  
    ngOnInit(): void{
    this.userlistService.getUsers()
    .subscribe(res => {
      this.users = res;
      this.userlistService.setResult(this.users);
      console.log(JSON.stringify(res));
    });
   
  }

}
