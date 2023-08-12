import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class MyInterceptor implements NestInterceptor {

    constructor(private readonly authService: AuthService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Code to be executed before the request is handled by the route handler
    const request = context.switchToHttp().getRequest()
    const token = request.headers['Authorization']
    const info = this.authService.decodeToken(token)
    request.body = info
    
    // You can modify the request or response here if needed

    // Continue the request-response cycle
    return next.handle()
  }
}
