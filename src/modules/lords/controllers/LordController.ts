
import { LordMongoRepository } from '@modules/lords/infra/LordMongoRepository'
import { NextFunction, Request, Response } from 'express'
import { MakeResponse } from '@shared/http/express/MakeResponse'
import { LordService } from '../LordService'
import { LordMapper } from '../mappers/LordMapper'
import { Lord } from '../Lord'

const lordRepository = LordMongoRepository.create()

const lordService = new LordService(
    lordRepository
)

export class LordController {
    static async insert(req: Request, res: Response, next: NextFunction) {
        try {
            let lord: any = await lordService.insert(req.body)
    
            lord = LordMapper.toDTO(lord)
        
            const response = (new MakeResponse(res))
    
            return response.ok(lord)
        } catch(err) {
            next(err)
        }
    }

    static async findById (req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
    
            let lord: any = await lordService.findByID(id)
            
            if (lord instanceof Lord) lord = LordMapper.toDTO(lord)

            const response = (new MakeResponse(res))
        
            return lord ? response.ok(lord) : response.notFound()
        } catch(err) { next(err) }
    }

    static async deleteById (req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
    
            let deleted = await lordService.deleteById(id)

            const response = (new MakeResponse(res))
        
            return response.ok({deleted})
        } catch(err) {
            next(err)
        }
    }
}