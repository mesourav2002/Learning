import React from "react";
import NavBar from "./NavBar";
import RecipeReviewCard from "./Card";
import "./mui.css"
const MuiPage = () => {
  return (
    <div className="mui-page">
      <div>
        <NavBar />
      </div>
      <div className="Card">
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>
    </div>
  );
};

export default MuiPage;
