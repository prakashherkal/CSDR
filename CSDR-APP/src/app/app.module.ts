import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MappingComponent } from './mapping/mapping.component';
import { ParticipentComponent } from './participent/participent.component';
import { IsinComponent } from './isin/isin.component';
import { QueryComponent } from './query/query.component';
import { AuditHistoryComponent } from './audit-history/audit-history.component';



const appRoutes: Routes = [
  
  { path: 'mapping', component: MappingComponent },
  { path: 'participent', component: ParticipentComponent },
  { path: 'isin', component: IsinComponent },
  { path: 'query', component: QueryComponent },
  { path: 'history', component: AuditHistoryComponent }
];
@NgModule({
  declarations: [AppComponent, ModalComponent,MappingComponent,ParticipentComponent,
    IsinComponent,QueryComponent,AuditHistoryComponent,HeaderComponent,SideNavBarComponent],
  imports: [BrowserModule,
     BrowserAnimationsModule,
      MaterialModule,
      RouterModule.forRoot(appRoutes, { useHash: true }),],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]     
})
export class AppModule {}
