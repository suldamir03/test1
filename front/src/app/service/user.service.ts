import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../entity/user";
import {Post} from "../entity/post";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl =  'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  findByUserId(user_id: number):Observable<Post[]> {
    const url = `${this.apiUrl}/posts/${user_id}`;
    return this.http.get<Post[]>(this.apiUrl + '/posts/' +user_id);
  }
}
