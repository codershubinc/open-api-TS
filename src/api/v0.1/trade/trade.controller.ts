import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { getTradeData } from "./utils/getData";
import { ApiResponse } from "../../../common/helpers/responce.api";
import { ApiError } from "../../../common/helpers/error.api";
import { symbols, tradeDataSymbols } from "./utils/constants";

@Controller('/v0.1/trade')
export class TradeController {
    constructor() { }

    @Get('/:sym/:type')
    async getTrade(
        @Param('sym') sym: string,
        @Param('type') type: string,
    ) {
        try {
            const data = getTradeData(sym, type);
            console.log('type', type);
            console.log('sym', sym);
            console.log('data', data);


            if (!data) {
                throw new NotFoundException(
                    new ApiError(
                        404,
                        'Data not found for this symbol and type',
                        [
                            'check for correct symbols and type',
                            { 'available symbols': [...symbols] },
                            { 'available types': [...tradeDataSymbols] }
                        ],
                        null
                    )
                );
            }

            return new ApiResponse(200, data, '');
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }

            return new ApiError(
                500,
                'Internal server error',
                [
                    'check for correct symbols and type',
                    ['available symbols', ...symbols],
                    ['available types', ...tradeDataSymbols]
                ],
                error
            );
        }
    }
}