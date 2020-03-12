import { Controller, Get, Param } from '@nestjs/common';
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

    @Get(':name')
    async findByName(@Param() name){
        return await this.categoryRepo.find
    }
}
