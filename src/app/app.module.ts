import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one.component';
import { ComponentTwoComponent } from './component-two.component';
import { ComponentThreeComponent } from './component-three.component';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoComponent } from './child-two.component';
import { OptionalParameterComponent } from './optional-parameter.component';
import { AuxRouteComponent } from './aux-route.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ChildOneComponent,
    ChildTwoComponent,
    OptionalParameterComponent,
    AuxRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
