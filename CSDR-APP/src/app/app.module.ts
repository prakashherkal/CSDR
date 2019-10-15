import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal-edit/modal.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MappingComponent } from './mapping/mapping.component';
import { ParticipentComponent } from './participent/participent.component';
import { IsinComponent } from './isin/isin.component';
import { QueryComponent } from './query/query.component';
import { AuditHistoryComponent } from './audit-history/audit-history.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import {LoginComponent} from './login/login.component'
import { from } from 'rxjs/internal/observable/from';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {MatButtonModule, MatCheckboxModule, MatSelectModule} from '@angular/material';




const appRoutes: Routes = [
  { path: '',redirectTo : 'login', pathMatch : 'full' },
  {path: 'registration',component: UserRegistrationComponent
  },
  { path: 'login',component: LoginComponent },
  { path: 'mapping', component: MappingComponent,canActivate: [CanActivateRouteGuard] },
  { path: 'participent', component: ParticipentComponent ,canActivate: [CanActivateRouteGuard]},
  { path: 'isin', component: IsinComponent,canActivate: [CanActivateRouteGuard] },
  { path: 'query', component: QueryComponent ,canActivate: [CanActivateRouteGuard]},
  { path: 'history', component: AuditHistoryComponent ,canActivate: [CanActivateRouteGuard]}
];
@NgModule({
  declarations: 
  [
    UserRegistrationComponent,
    LoginComponent,
    AppComponent, 
    ModalComponent,
    MappingComponent,
    ParticipentComponent,
    IsinComponent,
    QueryComponent,
    AuditHistoryComponent,
    HeaderComponent,
    SideNavBarComponent
  ],

  imports: 
  [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
     BrowserAnimationsModule,
      MaterialModule,
      RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CanActivateRouteGuard, AuthenticationService, RouterService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]     
})
export class AppModule {}
