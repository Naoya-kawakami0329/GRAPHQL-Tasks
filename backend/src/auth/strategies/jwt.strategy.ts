import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "generated/prisma";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";
import { JwtPayload } from "../types/jwtPayload.type";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
constructor(private readonly userService:UserService){
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration:false,
        secretOrKey:secret,
    })
}

async validate(payload:JwtPayload):Promise<User | null> {
    return await this.userService.getUser(payload.email);
}
}
