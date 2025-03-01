import { Injectable } from "@nestjs/common";
import GetUser from "./util/getUserData";
import asyncHandler from "../../../common/handlers/async.handler";

@Injectable()
export class UserService {
    constructor() { }

    getUserByContry = async (country: any) => {
        return await GetUser.byContryCode(country)
    }
}