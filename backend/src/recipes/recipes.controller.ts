import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.schema';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) { }

    @Get()
    async findAll(@Query('type') type?: string) {
        if (type) {
            return this.recipesService.findByType(type);
        }
        return this.recipesService.findAll();
    }

    @Get('search')
    async search(@Query('q') query: string) {
        if (!query) {
            return this.recipesService.findAll();
        }
        return this.recipesService.search(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.recipesService.findOne(id);
    }

    @Post()
    async create(@Body() recipeData: Partial<Recipe>) {
        return this.recipesService.create(recipeData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() recipeData: Partial<Recipe>) {
        return this.recipesService.update(id, recipeData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.recipesService.delete(id);
    }

    @Post('seed')
    async seedRecipes(@Body() recipes: Partial<Recipe>[]) {
        return this.recipesService.seedRecipes(recipes);
    }
}
