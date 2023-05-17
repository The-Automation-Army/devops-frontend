import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AnimalsPageComponent } from './admin/pages/animals-page/animals-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetterAccess } from './_helpers/jwt';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsPageComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterFormComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetterAccess,
        allowedDomains: [environment().apiURL],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
