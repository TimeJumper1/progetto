import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MyPipePipe } from './pipes/my-pipe.pipe';
import {AsyncObservablePipeComponent} from "../service/asyncPipe";


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LoginComponent,
    MyPipePipe,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AsyncObservablePipeComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
