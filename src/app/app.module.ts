import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule } from '@angular/material';

import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CoreModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [ ShellComponent ]
})
export class AppModule { }
