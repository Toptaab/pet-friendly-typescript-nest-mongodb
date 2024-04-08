import { Injectable } from "@nestjs/common";
import { JwtService } from "./jwt.service";



@Injectable()
export class UtilsService {
    constructor(
        readonly jwt: JwtService
    ) { }
}