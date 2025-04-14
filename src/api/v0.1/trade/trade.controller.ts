import { Controller, Get } from "@nestjs/common";
import { getTradeData } from "./utils/getData";

@Controller('/trade')
export class TradeController {
    constructor() { }

    @Get('')
    async getTrade() {
        const data = getTradeData(
            'AAPL',
            'overview',
        )
        return data
    }
}