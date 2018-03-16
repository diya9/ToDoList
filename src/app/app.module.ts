import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { ShowTodoComponent } from './component/show-todo/show-todo.component';
import { TodoService } from './services/todo.service';

const appRoutes : Routes = [
  {path: 'showTodo', component : ShowTodoComponent},
  {path: '', component : AddTodoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ShowTodoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
