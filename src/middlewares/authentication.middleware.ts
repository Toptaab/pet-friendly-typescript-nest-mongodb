import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from 'src/utils/jwt.service';


@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    constructor(private readonly jwt: JwtService) { }
    use(req: Request, res: Response, next: NextFunction) {
        if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")){
            throw new Error
        }
        const accessToken = req.headers.authorization.split(' ')[1]
        const user = this.jwt.decode(accessToken)

        req.body.id = user.id
        next();
    }
}