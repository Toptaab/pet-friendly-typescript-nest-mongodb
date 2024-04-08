import { Module } from "@nestjs/common";
import { JwtService } from "./jwt.service";
import { UtilsService } from "./utils.service";
import { JwtModule } from "@nestjs/jwt";



@Module({
    imports: [JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: "10d"}
    })],
    providers:[UtilsService,JwtService],
    exports:[UtilsService,JwtService]
})
export class UtilsModule{}