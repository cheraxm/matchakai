import react, { useState } from "react";
import RecipesCard from './RecipesCard';
import MatchaJournal from './MatchaJournal';

const TABS = ["Journal", "Recipe", "Event"];

export default function FavoriteTab({ favoriteJournals, favoriteRecipes }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-12 border-b border-gray-300">
        {TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-xl font-line transition-colors
                ${isActive ? "text-black" : "text-black/50 hover:text-black"}`}
            >
              {tab}
              {isActive && (
                <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-black" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {activeTab === "Journal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteJournals.map((item) => (
              <MatchaJournal
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        )}

        {activeTab === "Recipe" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteRecipes.map((item) => (
              <MatchaJournal
                key={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        )}
        {activeTab === "Event" && (
          <div className="text-center text-gray-500 py-10">
            <p>No favorite events yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
