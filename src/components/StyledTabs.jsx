import React, { useState } from 'react';

const TABS = ["Drinks", "Desserts", "Cooks"];

function StyledTabs({ setActiveType }) {
  const [activeTab, setActiveTab] = useState(1);

  const onSwitch = (index) => {
    setActiveTab(index)
    setActiveType(index)
  }

  return (
    <div className="w-full font-instrument">
    
      <div className="flex w-full max-w-5xl mx-auto border-2 border-black/60 divide-x-2 divide-black/60">
        
        {TABS.map((tab, index) => {
          
          return (
            <button
              key={tab}
              onClick={() => onSwitch(index)}
              className={`flex-1 px-6 py-3 text-xl transition-colors cursor-pointer
                ${index === activeTab
                  ? 'bg-[#FFF4E7] font-semibold text-black'
                  : 'bg-[#FFF4E7] text-black/70'
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StyledTabs;