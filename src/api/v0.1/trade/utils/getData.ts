import { symbols, tradeDataSymbols } from "./constants"
import { tradeData } from "../data"

export const getTradeData = (
    sym: string,
    type: string,
) => {
    if (!sym || !symbols.includes(sym)) throw new Error("Symbol not found")
    if (!type || !tradeDataSymbols.includes(type)) throw new Error("Type not found")
    console.log(`Getting data for ${sym} of type ${type}`)
    console.log('data', tradeData[type]);
    ;

    const data = tradeData[type][sym]
    if (!data) throw new Error("Data not found")
    return data

}