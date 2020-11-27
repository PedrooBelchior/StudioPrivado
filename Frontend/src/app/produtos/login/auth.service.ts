import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { JwtService } from '@nestjs/jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    mostrarMenuEmitter = new EventEmitter<boolean>();
    constructor(
        private http: HttpClient,

    ) { }

    // tslint:disable-next-line: typedef
    async fazerLogin(user: any) {
        const result = await this.http.get<any>(`http://localhost:3000/users`, user).toPromise();
        if (result) {
            window.localStorage.setItem('token', 'result.access_token');
            return true;
        }
        return false;

    }
}
