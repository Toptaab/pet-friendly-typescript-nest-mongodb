import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports:[MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),UtilsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
