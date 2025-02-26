import { Controller, Get, Param, Res, HttpException, HttpStatus } from "@nestjs/common";
import { AvatarService } from "./avatar.service";
import axios from "axios";
import { Response } from "express";

@Controller('/v0.1/avatar')
export class AvatarController {
    constructor(private readonly avatarService: AvatarService) { }

    @Get('/:style/:query')
    async url(@Param() params: { style: string; query: string }, @Res() res: Response) {
        try {
            const imageUrl = await this.avatarService.getUrl(params.style, params.query);
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            console.log('Axios response:', response);
            // res.setHeader('Content-Type', 'image/svg+xml');
            res.send(response.data);
        } catch (error) {
            console.error('Error:', error);
            throw new HttpException('Failed to fetch image', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/:style')
    async urlA(@Param('style') style: string, @Res() res: Response) {
        try {
            const imageUrl = await this.avatarService.getUrl(style, null);
            console.log('imageUrl:', imageUrl);
            res.setHeader('Content-Type', 'image/svg+xml');
            return imageUrl;
        } catch (error) {
            console.error('Error:', error);
            throw new HttpException('Failed to fetch image', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
