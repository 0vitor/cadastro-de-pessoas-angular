import { Enderecos } from './../../interfaces/address';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from './../../interfaces/userModel';
import { UsersService } from './../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private usersService: UsersService, 
    private router: Router) { }
  
  id!: string; 
  user!: UserModel
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.id = params['id'] //log the value of id''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
    this.usersService.getById(this.id).subscribe(user => {
      this.user = user
      this.displayUser()
    })
  });
  }

  displayUser() {
    console.log(this.user)
  }

  delete() {
    this.usersService.delete(this.id).subscribe(_ => {
      this.router.navigate([""])
    })
  }
}
