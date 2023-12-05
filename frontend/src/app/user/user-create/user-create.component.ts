import { Enderecos } from './../../interfaces/address-class';
import { UsersService } from './../../services/users.service';
import { UserForm } from './../../interfaces/userForm';
import { UserModel } from 'src/app/interfaces/userModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user!: UserForm;
  enderecos: Enderecos[] = [];
  endereco!: Enderecos
  
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.user = new UserForm();
    this.enderecos.push(new Enderecos);
  }

  onSubmit() {
    console.log(this.user);
    this.user.enderecos = this.enderecos
    this.create(this.user)
  }

  addAddress() {
    this.enderecos.push(new Enderecos)
  }

  create(user: UserModel) {
    this.usersService.create(user).subscribe(_ => {
      this.router.navigate([""])
    })
  }

}
