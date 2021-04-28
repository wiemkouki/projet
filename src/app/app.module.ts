import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from "../app/utils/navbar/navbar.component";
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DataTablesModule } from 'angular-datatables';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfilComponent } from './profil/profil.component';
import { UserServiceService } from './services/user-service.service';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TestComponent } from './test/test.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { CategorieComponent } from './categorie/categorie.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const Routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'admin', component: AdmindashComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'forgotpwd/:id', component: ForgotPwdComponent },
  { path: 'changepwd', component: ChangepwdComponent },

  { path: 'test', component: TestComponent }
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
    RegisterComponent,
    ChangepwdComponent,
    CatalogComponent,
    TestComponent,
    AdmindashComponent,
    CategorieComponent,





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
    SocialLoginModule,
    DataTablesModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    NgxPopper,
    NgbModule


  ],
  providers: [UserServiceService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '975189348983-n9bq8niid4t71uqq6lppg3g97gurdjak.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1155701404843582')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ], bootstrap: [AppComponent]
})
export class AppModule { }
