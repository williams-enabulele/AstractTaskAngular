import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/features/auth/auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.authService.logout()
  }

}
