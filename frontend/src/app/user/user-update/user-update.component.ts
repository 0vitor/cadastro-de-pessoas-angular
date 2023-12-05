import { Enderecos } from 'src/app/interfaces/address-class';
import { UserModel } from 'src/app/interfaces/userModel';
import { UserForm } from './../../interfaces/userForm';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  
  private id!: string;
  formCliente!: UserForm;
  enderecos: Enderecos[] = [];
  
  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }
  
  ngOnInit(): void {
    this.formCliente = new UserForm();
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.usersService.getById(this.id).subscribe(user => {
      this.formCliente = user
      this.enderecos = [...this.formCliente.enderecos]
    })
  }
  
  onSubmit() {
    this.formCliente.enderecos = this.enderecos
    this.updateUser(this.formCliente)
  }
  
  updateUser(user: UserModel) {
    this.usersService.update(user).subscribe(_ => {
      this.router.navigate([""])
    })
  }
  
  addAddress() {
    this.enderecos.push(new Enderecos)
    console.log(this.enderecos)
  }
  
}
