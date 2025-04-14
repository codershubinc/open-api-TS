import { Controller, Get } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Controller('/trade')
export class TradeController {
    constructor() { }

    @Get('')
    async getTrade() {
        // const data = await firstValueFrom(this.httpService.get('./data/overview/AAPL.json'));
        return 'data';
    }
}