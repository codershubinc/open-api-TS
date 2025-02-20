import { Injectable } from "@nestjs/common";
import GetUser from "./util/create.user";



@Injectable()
export class UserService {
    constructor() { }

    async getUserByContry(country: string) {
        return GetUser.byContry(country);
    }



}