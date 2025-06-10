import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {id: 1, name: "Café", description: "Café desc"},
      {id: 2, name: "Leite", description: "Leite desc"},
      {id: 3, name: "Farinha", description: "Farinha desc"},
      {id: 4, name: "Azeite de Oliva", description: "Azeite de Oliva desc"},
      {id: 5, name: "Óleo de Girassol", description: "Óleo de Girassol desc"},
      {id: 6, name: "Sal", description: "Sal desc"},
      {id: 7, name: "Açúcar", description: "Açúcar desc"},
    ])
  }
}