import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'user-settings', component: UserSettingsFormComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
