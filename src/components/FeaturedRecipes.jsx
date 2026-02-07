import React from 'react';

import { Allrecipes } from '../data/recipes';

function FeaturedRecipes() {
  
  const featuredItems = Allrecipes.slice(0, 3);

  return (
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center items-center flex-wrap gap-8">

          {featuredItems.map((recipe) => (
            <div
              key={recipe.id}
              className="w-72 h-80 bg-white border-2 border-black rounded-2xl p-4 flex flex-col items-center shadow-md"
            >
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-line text-xl text-center mt-5">
                {recipe.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
  );
}

export default FeaturedRecipes;