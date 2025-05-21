import { tradeData } from "../data"

export const getTradeData = (
    sym: string,
    type: string,
) => {
    const data = tradeData?.[type]?.[sym]

    return data ? data : null
}