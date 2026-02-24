import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  register(payload: any) {
    // store user in localStorage (very simple)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(payload);
    localStorage.setItem('users', JSON.stringify(users));
    // set token
    localStorage.setItem('token', 'demo-token');
    return Promise.resolve(true);
  }

  login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const ok = users.find((u: any) => u.email === email && u.password === password);
    if (ok) localStorage.setItem('token', 'demo-token');
    return !!ok;
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
