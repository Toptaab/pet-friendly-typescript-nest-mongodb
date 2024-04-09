import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UtilsModule } from 'src/utils/utils.module';
import { AuthenticationMiddleware } from 'src/middlewares/authentication.middleware';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';


@Module({
  imports:[MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),UtilsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes({ path: 'auth/me', method: RequestMethod.GET })
  }
}
