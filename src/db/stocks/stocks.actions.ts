'use server'

import { formSchema } from '@/components/Forms/AddStockForm/AddStockForm'
import dbConnect from '@/db/connection'
import { StockDocument } from '@/db/stocks/stock.document'
import Stock from '@/db/stocks/stocks.schema'
import { z } from 'zod'

export async function create(values: z.infer<typeof formSchema>) {
  await dbConnect()

  const stock = new StockDocument(values.name, values.type)
  const teste = await Stock.create(stock)
  console.log(teste)
}
