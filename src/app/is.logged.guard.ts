import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor() { }
  isAuthenticated() {
    if (localStorage.getItem('session_id')) {
      return true;
    } else {
      return false
    }
  }
  canActivate(): boolean {
    return this.isAuthenticated();
  }
}

