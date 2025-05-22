import { Controller, Get, Param, Res, HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { AvatarService } from "./avatar.service";
import axios from "axios";
import { Response } from "express";
import { ApiError } from "@/common/helpers/error.api";
import { avatarStyles } from "./utils/avatar.constants";

@Controller('/v0.1/avatar')
export class AvatarController {
    constructor(private readonly avatarService: AvatarService) { }

    @Get('/:style/:query')
    url(@Param() params: { style: string; query: string }) {
        try {
            if (!avatarStyles.includes(params.style)) {
                throw new HttpException(
                    new ApiError(
                        400,
                        'Bad Request',
                        {
                            "try_these types": [
                                ...avatarStyles.map((style) => style.toLowerCase().replaceAll(" ", "-").replaceAll("_", "-"))
                            ]
                        }
                    ),
                    HttpStatus.BAD_REQUEST
                );
            }
            return this.avatarService.getUrl(params.style, params.query);
        } catch (error) {
            console.error('Error:', error);
            throw new NotFoundException(
                new ApiError(
                    500,
                    'Internal Server Error',
                    {
                        "try_these types": [
                            ...avatarStyles.map((style) => style.toLowerCase().replaceAll(" ", "-").replaceAll("_", "-"))
                        ]
                    }
                )
            )
        }
    }

    @Get('/:style')
    async urlA(@Param('style') style: string, @Res() res: Response) {
        try {
            const imageUrl = await this.avatarService.getUrl(style, null);
            console.log('imageUrl:', imageUrl);
            res.sendFile(imageUrl);
        } catch (error) {
            console.error('Error:', error);
            throw new NotFoundException(
                new ApiError(
                    500,
                    'Internal Server Error',
                    {
                        "try_these types": [
                            ...avatarStyles.map((style) => style.toLowerCase().replaceAll(" ", "-").replaceAll("_", "-"))
                        ]
                    }
                )
            )
        }
    }
}
