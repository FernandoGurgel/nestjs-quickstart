import { Controller, Get } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoryController {

    constructor( @InjectRepository(Category) private readonly categoryRepo: Repository<Category> ){

    }

    @Get()
    async index(){
        return await this.categoryRepo.find()
    }
}
