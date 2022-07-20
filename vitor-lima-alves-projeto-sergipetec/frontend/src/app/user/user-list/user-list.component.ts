import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/interfaces/userModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users!: UserModel[]

  constructor(private usersService: UsersService) {}
  
  ngOnInit() {
    this.usersService.read().subscribe(users => {
      this.users = users
    })
  }
  
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'editar'];

}

