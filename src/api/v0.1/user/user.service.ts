import { Injectable } from "@nestjs/common";
import GetUser from "./util/getUserData";
import asyncHandler from "../../../common/handlers/async.handler";

@Injectable()
export class UserService {
    constructor() { }

    getUserByContry = (country: any) => {
        return GetUser.byContryCode(country)
    }
}