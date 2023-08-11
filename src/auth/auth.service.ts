import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}

    async generateToken(targetObject: any){
        const token = await this.jwtService.signAsync(targetObject)
        return token
    }

    validateToken(token: string){
        const obj = this.jwtService.verify(token)
        return obj
    }
}
