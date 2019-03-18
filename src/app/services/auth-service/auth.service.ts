import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    } else {
      // return !this.jwtHelper.isTokenExpired(token);
      return true;
    }
  }
}

// reikalinga komanda -> npm install --save @auth0/angular-jwt
