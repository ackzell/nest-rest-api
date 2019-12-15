import { Injectable } from '@nestjs/common'
import { Item } from './interfaces/item.interface'

import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

// this annotation will help us use it in the
// dependency injection system that Nest provides
// ie. inject it into the controller's constructor method
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find()
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id })
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item)
    return await newItem.save()
  }
}
