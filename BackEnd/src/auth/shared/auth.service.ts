import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../../users/shared/user.service';
@Injectable()
export class AuthService {

    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.usersService.getByEmail(userEmail);
        if (user && user.password === userPassword) {
            const { _id, nome, email, tipo } = user;
            return { id: _id, nome, email, tipo };
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id, tipo: user.tipo};
        return{ 
            access_token: this.jwtService.sign(payload),
        };
    }

}
