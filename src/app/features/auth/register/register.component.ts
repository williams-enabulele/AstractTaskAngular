import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/alert.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  RegisterForm(){
    this.loading = true;
      this.authService.signup(this.registerForm.value).subscribe({
        next: response => {
          this.loading = false
          this.alertService.alertWithSuccess("Successfully registered, login!")
          console.log(response.data)
          this.router.navigate(['']);
        },
        error: err => {
          this.loading = false;
          console.log(err.error)
          this.alertService.alertWithError(err.error.message)
        }
      })
  }

}
