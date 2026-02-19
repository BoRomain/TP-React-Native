import Food from "@/class/Food";
import Meal from "@/class/Meal";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface MealContextType {
  meals: Meal[];
  addMeal: (meal: Meal) => void;
  foods: Food[];
  addFood: (food: Food) => void;
}

const MealContext = createContext<MealContextType | undefined>(undefined);

export const MealProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);

  const addMeal = (meal: Meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
  };

  const addFood = (food: Food) => {
    setFoods((prevFoods) => [...prevFoods, food]);
  };

  return (
    <MealContext.Provider value={{ meals, addMeal, foods, addFood }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => {
  const context = useContext(MealContext);
  if (context === undefined) {
    throw new Error("useMeal must be used within a MealProvider");
  }
  return context;
};
