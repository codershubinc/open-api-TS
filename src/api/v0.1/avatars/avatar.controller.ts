import { Controller, Get, Param, Res, HttpException, HttpStatus } from "@nestjs/common";
import { AvatarService } from "./avatar.service";
import axios from "axios";
import { Response } from "express";

@Controller('/v0.1/avatar')
export class AvatarController {
    constructor(private readonly avatarService: AvatarService) { }

    @Get('/:style/:query')
    url(@Param() params: { style: string; query: string }) {
        try {
            return this.avatarService.getUrl(params.style, params.query);
        } catch (error) {
            console.error('Error:', error);
            throw new HttpException('Failed to generate URL', HttpStatus.INTERNAL_SERVER_ERROR);
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
            throw new HttpException('Failed to fetch image', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
