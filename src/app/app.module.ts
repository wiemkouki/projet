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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CrudUserComponent } from './Admindash/crud-user/crud-user.component';
import {AuthService} from './services/auth.service';
import {AdminGuard} from './admin.guard';
import { ProductComponent } from './product/product.component';
import { Prod1Component } from './product/prod1/prod1.component';
import { Prod2Component } from './product/prod2/prod2.component';
import { Prod3Component } from './product/prod3/prod3.component';
import { Prod4Component } from './product/prod4/prod4.component';
import { Prod5Component } from './product/prod5/prod5.component';
import { Prod6Component } from './product/prod6/prod6.component';
import { Prod7Component } from './product/prod7/prod7.component';
import { Prod8Component } from './product/prod8/prod8.component';
import { CrudSScatComponent } from './admindash/crud-sscat/crud-sscat.component';
import { CmdeComponent } from './admindash/cmde/cmde.component';
import { CrudStockComponent } from './admindash/crud-stock/crud-stock.component';
import { EditComponent } from './profil/edit/edit.component';
const Routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'test', component: TestComponent },
  { path: 'admin', component: AdmindashComponent  },
  { path: 'users', component: CrudUserComponent },
  { path: 'stock', component: CrudStockComponent },
  { path: 'ss_categorie', component: CrudSScatComponent },
  { path: 'cmde', component: CmdeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'profil', component: ProfilComponent ,children: [
    {  path: 'edit' ,component:EditComponent }] },
  { path: 'forgotpwd/:id', component: ForgotPwdComponent },
  { path: 'changepwd', component: ChangepwdComponent },
  { path: 'prod1', component: Prod1Component },
  { path: 'prod2', component: Prod2Component },
  { path: 'prod3', component: Prod3Component },
  { path: 'prod4', component: Prod4Component },
  { path: 'prod5', component: Prod5Component },
  { path: 'prod6', component: Prod6Component },
  { path: 'prod7', component: Prod7Component },
  { path: 'prod8', component: Prod8Component },



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



    CrudUserComponent,

    ProductComponent,

    Prod1Component,

    Prod2Component,

    Prod3Component,

    Prod4Component,

    Prod5Component,

    Prod6Component,

    Prod7Component,

    Prod8Component,



    CrudSScatComponent,

    CmdeComponent,

    CrudStockComponent,

    EditComponent





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
