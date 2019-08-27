import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlistService } from '../shared/services/userlist.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[UserListComponent,],
  providers:[UserlistService]
})
export class UserListModule { }
