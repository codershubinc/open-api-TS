import { tradeData } from "../data"

export const getTradeData = (
    sym: string,
    type: string,
) => {
    const data = tradeData?.[sym]?.[type]
    return data ? data : null
}