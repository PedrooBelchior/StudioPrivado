import { Injectable } from '@angular/core';
import { AccountService } from './../account/shared/account.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private accountService: AccountService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler){

        const token = this.accountService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if(token){
            request = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request)
        .pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error:HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            // Erro e client ou de rede
            console.error('Ocorreu um erro:', error.error.message);
        }else{
            // Erro retornando pelo backend
            alert("Usuário/Senha errado ou não cadastrado!")
            console.error(
                `Código de erro ${error.status}, `+
                `Erro: ${JSON.stringify(error.error)}`);
        }
        // Retornar um observable com a mensagem.
        return throwError('Ocorreu um erro, tente novamente');
    }

}