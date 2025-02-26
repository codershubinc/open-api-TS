import { Injectable } from "@nestjs/common";




@Injectable()
export class AvatarService {

    constructor() { }

    async getUrl(
        type: string,
        query: string
    ) {
        return 'url'
    }

}