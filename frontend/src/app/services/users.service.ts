import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../interfaces/userModel';
import { catchError, Observable, map, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  baseUrl = 'http://localhost:3000/contribuintes'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl, user).pipe(
      map((obj => obj)),
      catchError(err => this.errorHandler(err))
    )
  }

  read(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl).pipe(
      map((obj => obj))
    )
  }

  getById(id: string): Observable<UserModel> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<UserModel>(url).pipe(
      map((obj => obj))
    )
  }
  
  update(user: UserModel): Observable<UserModel> {
    const url = `${this.baseUrl}/${user.id}`
    return this.http.put<UserModel>(url, user).pipe(
      map((obj => obj))
    )
  }

  delete(id: string): Observable<UserModel> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<UserModel>(url).pipe(
      map((obj => obj))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }

}
