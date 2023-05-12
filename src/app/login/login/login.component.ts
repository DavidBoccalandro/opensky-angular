import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private localStorage: LocalStorageService
  ) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.loginService.login(this.form.value).subscribe((token: string) => {
      this.localStorage.setItem('token', token);
    });
  }
}
