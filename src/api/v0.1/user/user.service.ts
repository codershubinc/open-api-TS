import { Injectable } from "@nestjs/common";
import GetUser from "./util/getUserData";

@Injectable()
export class UserService {
    constructor() { }

    async getUserByContry(country: string) {
        return await GetUser.byContryCode(country);
    }
}