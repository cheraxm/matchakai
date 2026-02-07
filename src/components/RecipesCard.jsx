import React from "react";

function RecipesCard({ image, title }) {
  return (
    <div className="w-60 h-75 bg-[#FFF4E7] rounded-lg shadow-md p-4 flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <div className="w-40 h-40 overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover"/>
        </div>
        <h3 className="font-line text-xl text-center">{title}</h3>
      </div>
    </div>
  );
}

export default RecipesCard;
