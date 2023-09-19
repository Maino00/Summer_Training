import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  baseUrl: string = 'http://localhost:3000/users';

  getAllUsers() {
    return this.http.get<Users[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<Users>(`${this.baseUrl}/${id}`);
  }

  login(email: string, password: string) {
    return this.http.get(`${this.baseUrl}?email=${email}&password=${password}`);
  }
}
