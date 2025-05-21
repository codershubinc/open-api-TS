import { Injectable } from "@nestjs/common";
import GetUser from "./util/getUserData";

@Injectable()
export class UserService {
    constructor() { }

    getUserByContry = (country: any) => {
        return GetUser.byContryCode(country)
    }
}