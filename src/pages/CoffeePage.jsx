import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CoffeeCard from "../components/coffeeCard";
import { coffeeData } from "../data/coffeeData";

const CoffeePage = () => {
  return (
    <div className="app-container">
      <Sidebar currentPath="/coffee" />
      <div className="main-content">
        <Header title="Coffee Selection" />
        <div className="page-content">
          <div className="coffee-grid">
            {coffeeData.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeePage;
