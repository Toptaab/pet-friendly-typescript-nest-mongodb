import { Injectable } from "@nestjs/common";
import { JwtService as jwtService} from "@nestjs/jwt"


@Injectable()
export class JwtService {
constructor(private readonly jwt: jwtService){}

sign(payload: Record<string,any>) {
    return {accessToken :  this.jwt.sign(payload)}
};

async signAsync(payload: Record<string,any>): Promise<{accessToken:string}>{
    // this.jwt.verify(token)
    return {accessToken : await this.jwt.signAsync(payload)}
};






} 