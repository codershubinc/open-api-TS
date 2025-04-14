import { Controller, Get, Param } from "@nestjs/common";
import { getTradeData } from "./utils/getData";

@Controller('/trade')
export class TradeController {
    constructor() { }

    @Get('/:sym/:type')
    async getTrade(
        @Param('sym') sym: string,
        @Param('type') type: string,
    ) {
        try {
            const data = getTradeData(
                sym,
                type,
            )
            return data
        } catch (error) {
            return { error: error.message }
        }
    }
}