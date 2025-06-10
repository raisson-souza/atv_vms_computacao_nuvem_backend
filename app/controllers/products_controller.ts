import { DateTime } from 'luxon'
import { inject } from '@adonisjs/core'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import CustomException from '#exceptions/custom_exception'
import ResponseSender from '../functions/core/ResponseMessage.js'
import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class UserController {
    async list({ response }: HttpContext): Promise<void> {
        try {
            const products = await Product.query().select("*")
            ResponseSender<Product[]>({ response, status: 201, data: products })
        }
        catch (ex) {
            ResponseSender<string>({ response, data: ex as Error })
        }
    }
}