import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NapipPipe } from './napip.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NapipPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
