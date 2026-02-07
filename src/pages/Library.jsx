import React, { useEffect, useState } from "react";
import StyledTabs from "../components/StyledTabs";
import RecipesCard from "../components/RecipesCard";
import AddRecipeModal from "../components/AddRecipeModal";
import { IoSearch, IoAdd } from "react-icons/io5";
import api from "../services/api";
import { getRecipeImage } from "../utils/recipeImages";

// Fallback data if API fails
import { Allrecipes } from "../data/recipes";

const Library = () => {
  const [activeType, setActiveType] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [useLocalData, setUseLocalData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Map activeType to type string
  const typeMap = { 0: "drink", 1: "dessert", 2: "cooking" };

  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      const type = typeMap[activeType];
      const data = await api.get(`/recipes?type=${type}`);
      if (data && data.length > 0) {
        setRecipes(data);
        setUseLocalData(false);
      } else {
        // Use local data if API returns empty
        const localRecipes = Allrecipes.filter((r) => r.type === type);
        setRecipes(localRecipes);
        setUseLocalData(true);
      }
    } catch (error) {
      console.log("Using local data fallback:", error.message);
      // Fallback to local data
      const type = typeMap[activeType];
      const localRecipes = Allrecipes.filter((r) => r.type === type);
      setRecipes(localRecipes);
      setUseLocalData(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [activeType]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    try {
      const data = await api.get(`/recipes/search?q=${encodeURIComponent(searchTerm)}`);
      setRecipes(data);
    } catch (error) {
      console.log("Search fallback:", error.message);
      // Fallback to local search
      const filtered = Allrecipes.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRecipes(filtered);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddRecipe = async (recipeData) => {
    const newRecipe = await api.post("/recipes", recipeData);
    // Refresh recipes list
    await fetchRecipes();
    return newRecipe;
  };

  const recipesToDisplay = searchTerm && useLocalData
    ? recipes.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : recipes;

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
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full h-full bg-[#FFF4E7] p-3 pl-5 pr-12 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-[#9A8C78]"
            placeholder="Search..."
          />
          <button onClick={handleSearch}>
            <IoSearch className="z-10 w-6 h-6 absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" />
          </button>
        </div>
        <button
          title="Add new recipe"
          onClick={() => setIsModalOpen(true)}
          className="flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFF4E7] px-5 font-semibold text-gray-800 shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          <IoAdd className="h-6 w-6" />
          <span className="pr-1">Recipe</span>
        </button>
      </div>
      <StyledTabs setActiveType={setActiveType} />

      <div className="w-full max-w-7xl mt-8">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-white text-xl">Loading recipes...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {recipesToDisplay.map((item) => (
              <RecipesCard
                key={item._id || item.id}
                image={getRecipeImage(item.title) || item.image}
                title={item.title}
              />
            ))}
          </div>
        )}
        {!isLoading && recipesToDisplay.length === 0 && (
          <div className="text-center text-white py-10">
            No recipes found.
          </div>
        )}
      </div>

      <AddRecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddRecipe}
      />
    </div>
  );
};

export default Library;