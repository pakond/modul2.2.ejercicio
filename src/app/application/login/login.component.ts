import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  doLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(['/users']);
    }
  }

}
