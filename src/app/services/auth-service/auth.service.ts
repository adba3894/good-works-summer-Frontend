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
      return true;
    }
  }
}

// reikalinga komanda -> npm install --save @auth0/angular-jwt
