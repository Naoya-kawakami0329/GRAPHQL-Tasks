import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    UserModule,
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{expiresIn:"1h"},
    })
  ],
  providers: [AuthResolver,AuthService,LocalStrategy,JwtStrategy ]
})
export class AuthModule {}
