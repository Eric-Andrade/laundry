import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';

import { AuthModule } from './shell/auth/auth.module';

import { BrowserModule } from '@angular/platform-browser';
import { AnalyticsService } from '../analytics/analytics.service';
import { BranchofficesService } from '../branchoffices/branchoffices.service';
import { ClientsService } from '../clients/clients.service';
import { EmployeesService } from '../employees/employees.service';
import { OrdersService } from '../orders/orders.service';
import { ServicesService } from '../services/services.service';
import { SharedModule } from '../shared/shared.module';

import { ShellComponent } from './shell/shell.component';
import { AboutComponent } from './shell/about/about.component';
import { IndexComponent } from './shell/index/index.component';
import { MapComponent } from './shell/map/map.component';
import { OrderComponent } from './shell/order/order.component';


const routes: Routes = [
  { path: '', loadChildren: './../home/home.module#HomeModule'},
  { path: 'analytics', loadChildren: './../analytics/analytics.module#AnalyticsModule'},
  { path: 'branchoffices', loadChildren: './../branchoffices/branchoffices.module#BranchofficesModule'},
  { path: 'clients', loadChildren: './../clients/clients.module#ClientsModule'},
  { path: 'employees', loadChildren: './../employees/employees.module#EmployeesModule'},
  { path: 'orders', loadChildren: './../orders/orders.module#OrdersModule'},
  { path: 'services', loadChildren: './../services/services.module#ServicesModule'},
  { path: 'about', component: AboutComponent },
  { path: '**', loadChildren: './../home/home.module#HomeModule'}
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    AuthModule
  ],
  declarations: [ ShellComponent, AboutComponent, IndexComponent, MapComponent, OrderComponent ],
  exports: [ ShellComponent, SharedModule, AuthModule],
  providers: [ AnalyticsService, BranchofficesService, ClientsService, EmployeesService, OrdersService, ServicesService ]
})
export class CoreModule { }
