import { Controller, Get, Param, NotFoundException } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiResponse } from "../../../common/helpers/responce.api";
import countryCodes from "../../../common/data/contryData/utils/constants/allContryCodes";
import { ApiError } from "../../../common/helpers/error.api";

@Controller('/v0.1/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get(['/:country', ''])
    getUserByCountry(@Param('country') country: string) {
        if (!country || country === '' || country.toLowerCase() === 'random') {
            return new ApiResponse(
                200,
                this.userService.getUserByContry('random'),
                'Success'
            );
        }

        if (!countryCodes.includes(country)) {
            throw new NotFoundException(
                new ApiError(
                    404,
                    'Country not found',
                    { validCodes: countryCodes },
                    'Country not found'
                )
            );
        }

        return new ApiResponse(
            200,
            this.userService.getUserByContry(country),
            'Success'
        );
    }
}
