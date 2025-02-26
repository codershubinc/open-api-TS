import { Injectable } from "@nestjs/common";
import AVATAR from "./utils/avatar.url";




@Injectable()
export class AvatarService {

    constructor() { }

    async getUrl(
        style: string,
        query?: string | null
    ) {

        try {
            return AVATAR.getUrl(style, query);
        } catch (error) {
            throw error;
        }
    }
}