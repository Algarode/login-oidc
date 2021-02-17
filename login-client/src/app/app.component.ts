import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-client';
  isLoggedIn = false;

  constructor(private auth: AuthService) {//private _authService: AuthService
  }

  ngOnInit(): void {
    
  }

  login() {
    this.auth.loginWithRedirect();
  }
}
