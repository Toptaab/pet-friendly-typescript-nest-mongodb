import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request On path...',req.path);
    console.log('Method...',req.method);
    console.log('Body...',req.body);
    console.log('Params...',req.params);
    next();
  }
}
