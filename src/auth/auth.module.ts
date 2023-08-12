import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './constant';

@Module({
  imports: [JwtModule.register(jwtSecret)],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
