import { CanActivate, ExecutionContext, Injectable  } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';


@Injectable()
export class UserloginGuard implements CanActivate {

  constructor(private readonly authService : AuthService){}

  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()

    const auth = request.headers.authorization
    
    
    return this.authService.validateToken(auth);
  }
}
