import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: 'dbceee55426b66f7f665b8ad3ca6f9bef5d573f16c982518582bd32f7e1d1464'})],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
