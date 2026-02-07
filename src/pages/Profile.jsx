import React, { useEffect, useState } from "react";
import FavoriteTab from "../components/FavoriteTab";
import TopRightMenu from "../components/TopRightMenu";
import { useNavigate } from "react-router-dom";
import ProfileAvatar from "../components/ProfileAvatar";
import Chinjung from "../assets/chinjung.jpg";

import { Allrecipes } from "../data/recipes";
import { allMatchaBoards } from "../data/journal";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleEdit = () => navigate("/editprofile");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const favoriteRecipes = Allrecipes.slice(0, 3);
  const favoriteJournals = allMatchaBoards.slice(0, 3);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      return navigate("/login");
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);

  return (
    <div className="min-h-screen bg-[#FFF4E7] pt-32">

      <div className="relative mx-auto max-w-6xl px-6 pt-6 pb-16">
        <div className="absolute top-6 right-6">
          <TopRightMenu onEdit={handleEdit} onLogout={handleLogout} />
        </div>

        <div className="flex flex-col items-center pt-8">
          <ProfileAvatar initialImage={Chinjung} />
          <p className="font-instrument text-4xl mt-4">Hi, {user.username}</p>
        </div>

        <div className="w-full flex flex-col gap-6 pt-16">
          <h3 className="font-line text-2xl font-semibold">Your Favorite</h3>
          <FavoriteTab
            favoriteJournals={favoriteJournals}
            favoriteRecipes={favoriteRecipes}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
