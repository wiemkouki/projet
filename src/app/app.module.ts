import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from "@angular/material/toolbar";
import {MatSidenavModule } from "@angular/material/sidenav";
import {MatListModule } from "@angular/material/list";
import {MatButtonModule } from "@angular/material/button";
import {MatIconModule } from "@angular/material/icon";
import { NavbarComponent } from "../app/utils/navbar/navbar.component";
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { Routes , RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfilComponent } from './profil/profil.component';
import { UserServiceService } from './user-service.service';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

const Routes: Routes= [

  {path:'login',component: LoginComponent},
  {path:'cart',component: CartComponent},
  {path:'register',component: RegisterComponent},
  {path:'reset-password',component: ResetPasswordComponent},
  {path:'profil',component: ProfilComponent},
  {path:'forgotpwd',component: ForgotPwdComponent}
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CartComponent,
    ResetPasswordComponent,
    ProfilComponent,
    ForgotPwdComponent,
   
   
   
    
  ],
  imports: [
    
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    WavesModule,
    ButtonsModule, 
    IconsModule, 
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    


  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
