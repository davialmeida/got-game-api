import { ILordRepository } from "@modules/lords/interfaces/ILordRepository";
import { Lord } from "@modules/lords/Lord";

export class LordMemoryRepository implements ILordRepository {
    private lords: Lord[] = [];

    static create() {
        const instance = new LordMemoryRepository()

        return instance
    }

    async insert (lord: Lord): Promise<Lord> {
        this.lords.push(lord)

        return lord
    }
    async findByID (uuid: string): Promise<Lord | null> {
        const lord = this.lords.find(lord => lord.getUUID() === uuid);

        return lord ?? null
    }
    async deleteById (uuid: string): Promise<Boolean> {
        this.lords = this.lords.filter(lord => lord.getUUID() !== uuid)

        return true
    }
  }