import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentOneComponent } from './component-one.component';
import { ComponentTwoComponent } from './component-two.component';
import { ComponentThreeComponent } from './component-three.component';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoComponent } from './child-two.component';
const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOneComponent },
  { path: 'component-two', component: ComponentTwoComponent },
  { path: 'component-three/:id', component: ComponentThreeComponent,
  children: [
    { path: '', redirectTo: 'child-one', pathMatch: 'full' },
    { path: 'child-one', component: ChildOneComponent },
    { path: 'child-two', component: ChildTwoComponent }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
