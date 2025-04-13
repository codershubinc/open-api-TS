import { Controller, Get, Param, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiResponse } from "../../../common/helpers/responce.api";
import countryCodes from "../../../common/data/contryData/utils/constants/allContryCodes";
import { ApiError } from "../../../common/helpers/error.api";

@Controller('/v0.1/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get(['/:country', ''])
    getUserByCountry(@Param('country') country: string) {
        try {
            if (!country || country.trim() === '' || country.toLowerCase() === 'random') {
                const response = new ApiResponse(
                    200,
                    this.userService.getUserByContry('random'),
                    'Success'
                );

                return response;
            }
            if (!countryCodes.includes(country)) {
                throw new NotFoundException({
                    statusCode: 404,
                    message: 'Invalid country code',
                    validCodes: countryCodes
                });
            }

            const response = new ApiResponse(
                200,
                this.userService.getUserByContry(country),
                'Success'
            );

            return response;
        } catch (error: any) {

            if (error instanceof NotFoundException) {
                throw error;
            }

            // Handle unexpected errors
            throw new InternalServerErrorException(
                new ApiError(
                    error.statusCode || 500,
                    error.message || 'Something went wrong',
                    error.errors || null,
                    error.stack || null
                )
            );
        }
    }
}
