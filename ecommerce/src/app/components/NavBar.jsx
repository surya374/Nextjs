import React from "react";
import "../../app/globals.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Content from "./../pages/Content";

function NavBar() {
  return (
    <div>
      <div className="bg-yellow-300 flex justify-between items-center p-6">
        <h1 className="font-bold font text-2xl">Shopping Store</h1>
        <Header></Header>
      </div>

      <div className="bg-yellow-700 font-medium">
        <SubHeader />
      </div>

      <div>
        <Content />
      </div>
    </div>
  );
}

export default NavBar;
