import { House } from "@modules/houses/House"
import { HouseService } from "@modules/houses/HouseService"
import { HouseMemoryRepository } from "@modules/houses/infra/memory/HouseMemoryRepository"
import { LordMemoryRepository } from "@modules/lords/infra/memory/LordMemoryRepository"
import { Lord } from "@modules/lords/Lord"

describe('House service', () => {
    it('Insert House', async () => {
        const houseMemoryRepository = HouseMemoryRepository.create()
        const lordMemoryRepository = LordMemoryRepository.create()
        const houseService = new HouseService(houseMemoryRepository, lordMemoryRepository)

        const lord = await lordMemoryRepository.insert(Lord.create({
            name: 'Lord Stark',
            seasons: ['Season 1']
        }))

        const result = await houseService.insert({
            name: 'Teste',
            region: 'Teste',
            foundation_year: 'Teste',
            current_lord_id: lord.getUUID()
        });
        
        if (result) expect(result.name).toEqual('Teste')
    })

    it('List Houses', async () => {
        const houseMemoryRepository = HouseMemoryRepository.create()
        const lordMemoryRepository = LordMemoryRepository.create()
        const houseService = new HouseService(houseMemoryRepository, lordMemoryRepository)

        houseService.insert({
            name: 'Teste',
            region: 'Teste',
            foundation_year: 'Teste',
        })

        const results: House[] | null = await houseService.list()
        
        if (results) expect(results.length).toEqual(1)
    })

    it('Find By Name', async () => {
        const houseMemoryRepository = HouseMemoryRepository.create()
        const lordMemoryRepository = LordMemoryRepository.create()
        const houseService = new HouseService(houseMemoryRepository, lordMemoryRepository)

        houseService.insert({
            name: 'Teste 3',
            region: 'Teste 3',
            foundation_year: 'Teste',
        })

        const results: House[] | null = await houseService.findByName('Teste 3')
        
        if (results) expect(results[0].name).toEqual('Teste 3')
    })

    it('Find By Id', async () => {
        const houseMemoryRepository = HouseMemoryRepository.create()
        const lordMemoryRepository = LordMemoryRepository.create()
        const houseService = new HouseService(houseMemoryRepository, lordMemoryRepository)

        const house = await houseService.insert({
            name: 'Teste 4',
            region: 'Teste 4',
            foundation_year: 'Teste',
        })

        const result: House | null = await houseService.findByID(house.getUUID())
        
        if (result) expect(result.getUUID()).toEqual(house.getUUID())
    })

    it('Delete By Id', async () => {
        const houseMemoryRepository = HouseMemoryRepository.create()
        const lordMemoryRepository = LordMemoryRepository.create()
        const houseService = new HouseService(houseMemoryRepository, lordMemoryRepository)

        const house = await houseService.insert({
            name: 'Teste 5',
            region: 'Teste 5',
            foundation_year: 'Teste',
        })

        const result = await houseService.deleteById(house.getUUID())
        
        expect(result).toEqual(true)
    })
})