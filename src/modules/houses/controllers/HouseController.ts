
import {HouseMongoRepository} from '@modules/houses/infra/mongoose/HouseMongoRepository'
import { HouseService } from '@modules/houses/HouseService'
import { LordMongoRepository } from '@modules/lords/infra/LordMongoRepository'
import { HouseMap } from '@modules/houses/infra/mappers/HouseMapper'
import { House } from '@modules/houses/House'
import { NextFunction, Request, Response } from 'express'
import { MakeResponse } from '@shared/http/express/MakeResponse'

const houseRepository = HouseMongoRepository.create()
const lordRepository = LordMongoRepository.create()

const houseService = new HouseService(
    houseRepository,
    lordRepository
)

export class HouseController {
    static async insert(req: Request, res: Response, next: NextFunction) {
        try {
            let house = await houseService.insert({
                name: 'House Stark',
                region: 'North',
                foundation_year: 'Era do Gelo'
            })
    
            if (house instanceof House) house = HouseMap.toDTO(house)
        
            const response = (new MakeResponse(res))
    
            return house ? response.ok(house) : response.error('An error occurred while trying to insert a house')
        } catch(err) {
            next(err)
        }
    }

    static async list (req: Request, res: Response, next: NextFunction) {
        try {
            let houses: any = await houseService.list()

            houses = houses?.map(HouseMap.toDTO)

            const response = (new MakeResponse(res))

            return houses ? response.ok(houses) : response.notFound()
        } catch(err) { next(err) }
    }

    static async findByName (req: Request, res: Response, next: NextFunction) {
        try {
            const name = req.params.name
    
            let houses: any = await houseService.findByName(name)
        
            houses = houses?.map(HouseMap.toDTO)

            const response = (new MakeResponse(res))
        
            return houses ? response.ok(houses) : response.notFound()
        } catch(err) {
            next(err)
        }
    }

    static async findById (req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
    
            let house: any = await houseService.findByID(id)
            
            if (house instanceof House) house = HouseMap.toDTO(house)

            const response = (new MakeResponse(res))
        
            return house ? response.ok(house) : response.notFound()
        } catch(err) { next(err) }
    }

    static async deleteById (req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
    
            let deleted = await houseService.deleteById(id)

            const response = (new MakeResponse(res))
        
            return response.ok({deleted})
        } catch(err) {
            next(err)
        }
    }
}