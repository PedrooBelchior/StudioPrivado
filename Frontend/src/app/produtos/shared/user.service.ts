import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, ResponseUsers, ResponseUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/users';

  getUsers() {
    return this.http.get<ResponseUsers[]>(this.API);
  }

  createUser(request: User): Observable<User> {
    return this.http.post<User>(this.API, request);
  }

  getUser(_id: string): Observable<ResponseUser> {
    const URL = `${this.API}/${_id}`;

    return this.http.get<ResponseUser>(URL);
  }

  updateUser(_id: string, request: User): Observable<User> {
    const URL = `${this.API}/${_id}`;
    return this.http.put<User>(URL, request);
  }

  deleteUser(_id: any): Observable<any> {
    const URL = `${this.API}/${_id}`;

    return this.http.delete<any>(URL);
  }
  // deleteUser(_id: string, request: User): Observable<User> {
  //   const URL = `${this.API}/${_id}`;
  //   return this.http.put<User>(URL, request);

  // }
}
