import { Injectable } from "@nestjs/common";

@Injectable()
export class TradeService {
    getTradeByContry(country: string) {
        return country;
    }
}