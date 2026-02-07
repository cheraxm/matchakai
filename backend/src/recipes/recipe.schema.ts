import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema({ timestamps: true })
export class Recipe {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, enum: ['cooking', 'drink', 'dessert'] })
    type: string;

    @Prop()
    image: string;

    @Prop()
    description: string;

    @Prop([String])
    ingredients: string[];

    @Prop([String])
    instructions: string[];

    @Prop({ default: 0 })
    cookTime: number;

    @Prop({ default: 0 })
    servings: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
