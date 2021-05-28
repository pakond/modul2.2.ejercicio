import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersArray: IUser[] = [
    {id: 1, nombre: 'Test 1', apellidos: 'Apellidos1', pagado: true, email: 'test@test.com'},
    {id: 2, nombre: 'Test 2', apellidos: 'Apellidos2', pagado: false, email: 'test@test.com'},
    {id: 3, nombre: 'Test 3', apellidos: 'Apellidos3', pagado: true, email: 'test@test.com'},
    {id: 4, nombre: 'Test 4', apellidos: 'Apellidos4', pagado: false, email: 'test@test.com'},
    {id: 5, nombre: 'Test 5', apellidos: 'Apellidos5', pagado: true, email: 'test@test.com'},
    {id: 6, nombre: 'Test 6', apellidos: 'Apellidos6', pagado: false, email: 'test@test.com'},
    {id: 7, nombre: 'Test 7', apellidos: 'Apellidos7', pagado: true, email: 'test@test.com'},
  ]

  constructor() { }

  public getUsers() {        
      return this.usersArray;
  }

  public getUsersById(id: number): IUser {
      return this.usersArray.filter(user => user.id === +id)[0];
  }

  addUser(user: IUser) {
    user.id = this.usersArray.length + 1
    this.usersArray.push(user);
  }

}
