import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/features/auth/auth.service';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.authService.logout();
  }

}
