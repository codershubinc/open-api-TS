import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/:country')
    getUserByContry(@Param('country') country: string) {
        return this.userService.getUserByContry(country);
    }



}