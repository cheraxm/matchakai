import React from "react";

function MatchaJournal({ image, title, description }) {
  return (
    <div className="w-full max-w-sm bg-[#B5C196]/80 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full">
      
      <div>
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl text-black font-line font-bold text-center">
          {title}
        </h3>
        <p className="text-base text-black font-line">{description}</p>
      </div>

    </div>
  );
}

export default MatchaJournal;


