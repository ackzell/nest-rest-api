import { Injectable } from '@nestjs/common'
import { Item } from './interfaces/item.interface'

// this annotation will help us use it in the
// dependency injection system that Nest provides
// ie. inject it into the controller's constructor method
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123ouoidalkj1231',
      name: 'Item 1',
      qty: 10
    },
    {
      id: '123ouoidalkj1231_2',
      name: 'Item 2',
      qty: 9
    },
    {
      id: '123ouoidalkj1231_3',
      name: 'Item 3',
      qty: 4
    }
  ]

  findAll(): Item[] {
    return this.items
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id)
  }
}
