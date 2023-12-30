import mongoose from 'mongoose'

export interface IStocks {
  name: string
  type: StockType
  average_price?: number
  total_quantity?: number
  actual_total?: number
  actual_investment?: number
  actual_profit?: number
  actual_profit_percent?: number
  orders?: Array<Orders>
}

export interface Stocks extends mongoose.Document, IStocks {}

export interface Orders {
  quantity: number
  closing_price: number
  closing_date: Date
  closing_total: number
}

export enum StockType {
  fundoImobiliario = 'FII',
  acaoDividendos = 'Acao de Dividendos',
  acaoCapital = 'Acao de Capital'
}
