import { Enderecos } from './../../interfaces/address';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/interfaces/userModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  id!: string;
  user!: UserModel;
  endereco!: Enderecos[]
  constructor(private usersService: UsersService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.usersService.getById(this.id).subscribe(user => {
      this.user = user
      this.endereco = user.enderecos
    })
  }
  

}

