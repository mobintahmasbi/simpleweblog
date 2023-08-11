import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}

    async generateToken(targetObject: any){
        console.log(targetObject);
        
        const token = await this.jwtService.signAsync(targetObject)
        return token
    }

    validateToken(token: string){
        
        try{
        const obj = this.jwtService.verify(token)
        return obj
    }catch(err){
        throw new UnauthorizedException('Invalid token')
    }
        
    }
}
