import { Controller, Get, Param, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiResponse } from "../../../common/helpers/responce.api";
import countryCodes from "../../../common/data/contryData/utils/constants/allContryCodes";
import { ApiError } from "../../../common/helpers/error.api";

@Controller('/v0.1/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get(['/:country', ''])
    async getUserByCountry(@Param('country') country: string) {
        try {
            if (!country || country === '' || country.toLowerCase() === 'random') {
                const responce = new ApiResponse(
                    200,
                    await this.userService.getUserByContry('random'),
                    'Success'
                );
                console.log('responce:', responce);
                return responce;

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

            const responce = new ApiResponse(
                200,
                await this.userService.getUserByContry(country),
                'Success'
            );
            console.log('responce:', responce);
            return responce;

        } catch (error: any) {
            throw new InternalServerErrorException(
                new ApiError(
                    500,
                    'Something went wrong | Unexpected error happened',
                    error,
                    error.stack
                )
            )
        }
    }
}
