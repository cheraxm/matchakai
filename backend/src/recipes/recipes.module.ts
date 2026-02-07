import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from './recipe.schema';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
    ],
    controllers: [RecipesController],
    providers: [RecipesService],
    exports: [RecipesService],
})
export class RecipesModule { }
