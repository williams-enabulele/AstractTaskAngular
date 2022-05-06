import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/alert.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  LoginForm() {
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: response => {
        this.authService.setUser(response.data);
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        this.alertService.alertWithError(err.error.message)
      }
    }

    )
  }
}
