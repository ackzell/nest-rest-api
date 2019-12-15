import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // the Get decorator came from @nestjs/common
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll()
  }

  //* An alternative to read the params from the request
  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Will look for ${param.id}`
  //   }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id)
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} \b Description: ${createItemDto.description}`
  }

  @Delete(':id')
  deleteItem(@Param('id') id): string {
    return `Will delete id ${id}`
  }

  @Put(':id')
  updateItem(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update item ${id} - Name: ${updateItemDto.name}`
  }
}
