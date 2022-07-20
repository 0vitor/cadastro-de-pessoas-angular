import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserReadComponent } from './user/user-read/user-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: "contribuintes/create", component: UserCreateComponent },
  { path: "contribuintes/user/:id", component: UserReadComponent },
  { path: "contribuintes/update/:id", component: UserUpdateComponent },
  { path: "contribuintes/delete/:id", component: UserDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
