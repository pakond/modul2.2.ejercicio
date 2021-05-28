import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public addUserForm: FormGroup;

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.addUserForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'apellidos': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'pagado': new FormControl(null)
    });
  }

  doAddUser() {
    if (this.addUserForm.valid) {
      const user = {
        id: 0,
        nombre: this.addUserForm.value['username'],
        apellidos: this.addUserForm.value['apellidos'],
        password: this.addUserForm.value['password'],
        email: this.addUserForm.value['email'],
        pagado: this.addUserForm.value['pagado'],
      }
      this.userService.addUser(user)
      this.router.navigate(['/users']);
    }
  }
}
