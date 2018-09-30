import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ForgetComponent } from './forget/forget.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
=======
>>>>>>> 785de4001867b4227a50f29b66b757ed1df96154

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'forget', component: ForgetComponent },
<<<<<<< HEAD
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-details', component: UserDetailsComponent}
=======
>>>>>>> 785de4001867b4227a50f29b66b757ed1df96154
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

