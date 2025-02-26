import { Controller, Get, Param } from "@nestjs/common";
import { AvatarService } from "./avatar.service";

@Controller('/v0.1/avatar')
export class AvatarController {

    constructor(private readonly avatarService: AvatarService) { }

    @Get('/:type/:query')
    url(@Param() params: { type: string; query: string }) {
        return this.avatarService.getUrl(params.type, params.query);
    }

}


