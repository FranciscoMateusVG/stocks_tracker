import { IStocks, Orders, StockType } from './stocks.type'

export class StockDocument implements IStocks {
  constructor(
    public name: string,
    public type: StockType,
    public average_price?: number,
    public total_quantity?: number,
    public actual_total?: number,
    public actual_investment?: number,
    public actual_profit?: number,
    public actual_profit_percent?: number,
    public orders?: Array<Orders>
  ) {}
}
