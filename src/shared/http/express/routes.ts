import { HouseController } from '@modules/houses/controllers/HouseController'
import express from 'express'
import { MakeResponse } from './MakeResponse'

const routes = express.Router()

/**
 * Houses
 */
routes.put('/house', HouseController.insert)
routes.get('/houses', HouseController.list)
routes.get('/houses/search/:name', HouseController.findByName)
routes.delete('/houses/:id', HouseController.findById)
  
export { routes }