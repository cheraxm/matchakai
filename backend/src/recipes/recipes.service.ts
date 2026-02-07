import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe, RecipeDocument } from './recipe.schema';

@Injectable()
export class RecipesService {
    constructor(
        @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
    ) { }

    async findAll(): Promise<RecipeDocument[]> {
        return this.recipeModel.find().exec();
    }

    async findByType(type: string): Promise<RecipeDocument[]> {
        return this.recipeModel.find({ type }).exec();
    }

    async findOne(id: string): Promise<RecipeDocument | null> {
        return this.recipeModel.findById(id).exec();
    }

    async create(recipeData: Partial<Recipe>): Promise<RecipeDocument> {
        const newRecipe = new this.recipeModel(recipeData);
        return newRecipe.save();
    }

    async update(id: string, recipeData: Partial<Recipe>): Promise<RecipeDocument | null> {
        return this.recipeModel.findByIdAndUpdate(id, recipeData, { new: true }).exec();
    }

    async delete(id: string): Promise<RecipeDocument | null> {
        return this.recipeModel.findByIdAndDelete(id).exec();
    }

    async search(query: string): Promise<RecipeDocument[]> {
        return this.recipeModel.find({
            title: { $regex: query, $options: 'i' }
        }).exec();
    }

    async seedRecipes(recipes: Partial<Recipe>[]): Promise<RecipeDocument[]> {
        // Clear existing recipes first
        await this.recipeModel.deleteMany({});
        // Insert new recipes
        return this.recipeModel.insertMany(recipes);
    }
}
