import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      this.getUserTipo();
      this.getUser();
      return true;
    }

    return false;
  }


  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  
  getUserTipo(){
    //Pego o token
    const token = this.getAuthorizationToken();
    //Descriptografo a sessão, pego o ID do usuário
    const decoded: any = jwt_decode(token);
    if (decoded.tipo != null) {
      //Seto  o ID no localStorage
      window.localStorage.setItem('tipo', decoded.tipo );
      // console.log(decoded.sub);
      return decoded.tipo;
    }
  }
  
  // Pego  o usuário logado, descriptografo a sessão, pego seu ID e seto no localStorage
  // Para utilizar depois no header e no restante do site.
  getUser(){
    //Pego o token
    const token = this.getAuthorizationToken();
    //Descriptografo a sessão, pego o ID do usuário
    const decoded: any = jwt_decode(token);
    if (decoded.sub != null) {
      //Seto  o ID no localStorage
      window.localStorage.setItem('id', decoded.sub );
      // console.log(decoded.sub);
      return decoded.sub;
    }
  }


  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpiryDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }


  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  getTokenExpiryDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setSeconds(decoded.exp);
    return date;
  }



  
}
