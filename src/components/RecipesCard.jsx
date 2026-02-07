import React from "react";
import { IoLeaf } from "react-icons/io5";

function RecipesCard({ image, title }) {
  const hasValidImage = image && image.length > 0;

  return (
    <div className="w-60 h-75 bg-[#FFF4E7] rounded-lg shadow-md p-4 flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <div className="w-40 h-40 overflow-hidden rounded-lg bg-[#E8DDD0]">
          {hasValidImage ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <IoLeaf className="w-16 h-16 text-[#9A8C78]" />
            </div>
          )}
        </div>
        <h3 className="font-line text-xl text-center">{title}</h3>
      </div>
    </div>
  );
}

export default RecipesCard;
