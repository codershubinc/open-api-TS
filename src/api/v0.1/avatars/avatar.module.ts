import { Module } from "@nestjs/common";
import { AvatarController } from "./avatar.controller";
import { AvatarService } from "./avatar.service";



@Module({
    imports: [],
    controllers: [AvatarController],
    providers: [AvatarService],
    exports: []
})
export class AvatarModule { }