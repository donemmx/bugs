import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import  { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard'
import { SecureInnerGuard } from './secure-inner.guard'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    NgbModule,
  ],
  providers: [AuthService, AuthGuard, SecureInnerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
