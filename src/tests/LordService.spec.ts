import { LordMemoryRepository } from "@modules/lords/infra/memory/LordMemoryRepository"
import { LordService } from "@modules/lords/LordService"

describe('Lord service', () => {
    it('Insert Lord', async () => {
        const lordMemoryRepository = LordMemoryRepository.create()
        const lordService = new LordService(lordMemoryRepository)

        const lord = await lordService.insert({
            name: 'Lord Stark',
            seasons: ['Season 1']
        })

        expect(lord.name).toEqual('Lord Stark')
    })

    it('Find Lord By Id', async () => {
        const lordMemoryRepository = LordMemoryRepository.create()
        const lordService = new LordService(lordMemoryRepository)

        const lord = await lordService.insert({
            name: 'Lord Stark',
            seasons: ['Season 1']
        })

        const result = await lordService.findByID(lord.getUUID())

        if(result) expect(result.getUUID()).toEqual(lord.getUUID())
    })

    it('Delete Lord By Id', async () => {
        const lordMemoryRepository = LordMemoryRepository.create()
        const lordService = new LordService(lordMemoryRepository)

        const lord = await lordService.insert({
            name: 'Lord Stark',
            seasons: ['Season 1']
        })

        const result = await lordService.deleteById(lord.getUUID())

        if (result) expect(result).toEqual(true)
    })
})