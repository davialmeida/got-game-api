import { HouseController } from '@modules/houses/controllers/HouseController'
import express from 'express'

const routes = express.Router()

/**
 * Houses
 */
routes.post('/house', HouseController.insert)
routes.get('/houses', HouseController.list)
routes.get('/houses/search/:name', HouseController.findByName)
routes.get('/houses/:id', HouseController.findById)
routes.delete('/houses/:id', HouseController.deleteById)

/**
 * Lords
 */
 routes.post('/lord', HouseController.insert)
 routes.get('/lords', HouseController.list)
 routes.get('/lords/:id', HouseController.findById)
 routes.delete('/lords/:id', HouseController.deleteById)
  
export { routes }