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
                    await this.userService.getUserByContry('random'),
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
                await this.userService.getUserByContry(country),
                'Success'
            );
            console.log('response:', response);
            return response;
        } catch (error: any) {
            console.error('Error:', error);

            // If the error already has a status code (like 404), rethrow it
            if (error instanceof NotFoundException) {
                throw error;
            }

            // Handle unexpected errors
            throw new InternalServerErrorException(new ApiError(
                error.statusCode || 500,
                error.message || 'Something went wrong',
                error.errors || null,
                error.stack || null
            ));
        }
    }
}
