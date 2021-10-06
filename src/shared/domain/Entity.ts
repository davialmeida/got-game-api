import { v4 } from "uuid"

export abstract class Entity<T> {
    protected readonly uuid: string
    protected props: T
  
    constructor(props: T, uuid?: string) {
      this.uuid = uuid ? uuid : v4()
      this.props = props
    }

    public getUUID(): string {
      return this.uuid
  }
  }