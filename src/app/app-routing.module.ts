import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VarMenuComponent } from './var-menu/var-menu.component'


const routes: Routes = [

  { path: 'home', component: AppComponent },
  { path: 'vardashboard', component: VarMenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
