/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from './kernel.js'
import router from '@adonisjs/core/services/router'

const productsController = () => import("#controllers/products_controller")

router.group(() => {
  router.get('/', ({ response }) => { response.status(200).send("Computação em Nuvem") }),
  router.get('/list', [productsController, 'list'])
})
.prefix('/api')