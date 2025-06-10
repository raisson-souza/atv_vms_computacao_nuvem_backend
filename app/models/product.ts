import { DateTime } from 'luxon'
import { BaseModel, beforeUpdate, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null

  @beforeUpdate()
  static async update(product: Product) {
    product.updatedAt = DateTime.now()
  }
}