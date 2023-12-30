import mongoose, { Schema, model } from 'mongoose'
import { Orders, Stocks } from './stocks.type'

const OrderSchema = new Schema<Orders>({
  closing_date: {
    type: Date,
    required: [true, 'Order needs a "closing_date"']
  },
  closing_price: {
    type: Number,
    required: [true, 'Order needs a "closing_price"']
  },
  closing_total: {
    type: Number,
    required: [true, 'Order needs a "closiclosing_totalng_date"']
  },
  quantity: {
    type: Number,
    required: [true, 'Order needs a "quantity"']
  }
})

const StockSchema = new Schema<Stocks>({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
    select: true
  },
  type: {
    type: String,
    required: [true, "Please provide the pet owner's name"],
    select: true
  },

  average_price: {
    type: Number
  },
  actual_total: {
    type: Number
  },
  total_quantity: {
    type: Number
  },
  actual_profit: {
    type: Number
  },
  actual_investment: {
    type: Number
  },
  actual_profit_percent: {
    type: Number
  },
  orders: {
    type: [OrderSchema]
  }
})

export default mongoose.models.Stocks || model<Stocks>('Stocks', StockSchema)
