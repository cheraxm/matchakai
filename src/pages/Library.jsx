import React, { useEffect, useState } from "react";
import StyledTabs from "../components/StyledTabs";
import RecipesCard from "../components/RecipesCard";
import { IoSearch, IoAdd } from "react-icons/io5";
import { Allrecipes } from "../data/recipes";

const Library = () => {
  const [activeType, setActiveType] = useState(1);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let recipesByType;
    if (activeType === 2) {
      recipesByType = Allrecipes.filter((recipe) => recipe.type === "cooking");
    } else if (activeType === 1) {
      recipesByType = Allrecipes.filter((recipe) => recipe.type === "dessert");
    } else if (activeType === 0) {
      recipesByType = Allrecipes.filter((recipe) => recipe.type === "drink");
    }
    setFilteredRecipes(recipesByType);
  }, [activeType]);

  const recipesToDisplay = searchTerm
    ? filteredRecipes.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredRecipes;

  return (
    <div className="min-h-screen bg-[#B5C196] py-20 pt-32 px-4 sm:px-8 flex flex-col items-center gap-10">

      <h1 className="font-instrument text-5xl md:text-6xl text-white text-center">
        Matcha Recipes
      </h1>
      <div className="flex w-full max-w-xl items-center gap-4">
        <div className="relative flex-grow h-12">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-full bg-[#FFF4E7] p-3 pl-5 pr-12 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-[#9A8C78]"
            placeholder="Search..."
          />
          <IoSearch className="z-10 w-6 h-6 absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
        <button
          title="Add new recipe"
          className="flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFF4E7] px-5 font-semibold text-gray-800 shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          <IoAdd className="h-6 w-6" />
          <span className="pr-1">Recipe</span>
        </button>
      </div>
      <StyledTabs setActiveType={setActiveType} />

      <div className="w-full max-w-7xl mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {recipesToDisplay.map((item) => (
            <RecipesCard key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Library