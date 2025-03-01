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
            if (!country || country.trim() === '' || country.toLowerCase() === 'random') {
                const response = new ApiResponse(
                    200,
                    this.userService.getUserByContry('random'),
                    'Success'
                );
                console.log('response:', response);
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
            console.log('response:', response);
            return response;
        } catch (error: any) {
            console.error('Error:', error.status);
            throw !(error.status === 404) ? new ApiError(
                error.statusCode || 500,
                error.message || 'Something went wrong',
                error.errors || null,
                error.stack || null
            ) : error;
        }
    }
}
