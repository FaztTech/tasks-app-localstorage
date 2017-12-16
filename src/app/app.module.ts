import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { DataService } from './services/data.service';
import { TaskComponent } from './components/task/task.component';
import { TaskAddComponent } from './components/task-add/task-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NavbarComponent,
    TaskComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
