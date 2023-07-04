import crypto from "crypto"

export class Id<Entity> {
  private readonly id: string

  constructor() {
    this.id = crypto.randomUUID()
  }
}
