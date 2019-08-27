import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { UserListModule } from './user-list/user-list.module';
import { SharedModule } from './shared/shared.module';
import { DmaicModule } from './dmaic/dmaic.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    LoginModule,
    UserListModule,
    DmaicModule,
    CommonModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
