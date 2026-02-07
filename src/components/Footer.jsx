import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full bg-[#FBF3E9] py-5 border-t-2 border-[#D3C1A7]">
      <div 
        className="
          flex justify-center items-center flex-wrap 
          gap-x-4 gap-y-2 
          text-sm text-gray-600 
          font-sans
        "
      >
        <a href="#" className="hover:text-black transition-colors">About Us</a>
        <span>·</span>
        <a href="#" className="hover:text-black transition-colors">Contact</a>
        <span>·</span>
        <a href="#" className="hover:text-black transition-colors">Community Guidelines</a>
        
        <span className="text-gray-500">© 2025 MatchaCommunity</span>
      </div>
    </footer>
  );
}
