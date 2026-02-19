import Food from "@/class/Food";
import Meal from "@/class/Meal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface MealContextType {
  meals: Meal[];
  addMeal: (meal: Meal) => void;
  deleteMeal: (meal: Meal) => void;
  foods: Food[];
  addFood: (food: Food) => void;
  deleteFood: (food: Food) => void;
  clearFoods: () => void;
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

  const deleteMeal = (meal: Meal) => {
    setMeals((prevMeals) => prevMeals.filter((m) => m !== meal));
  };

  const addFood = (food: Food) => {
    setFoods((prevFoods) => [...prevFoods, food]);
  };

  const deleteFood = (food: Food) => {
    setFoods((prevFoods) => prevFoods.filter((f) => f !== food));
  };

  const clearFoods = () => {
    setFoods([]);
  };

  useEffect(() => {
    AsyncStorage.getItem("meals").then((meals) => {
      if (meals) {
        setMeals(JSON.parse(meals));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  return (
    <MealContext.Provider
      value={{
        meals,
        addMeal,
        deleteMeal,
        foods,
        addFood,
        deleteFood,
        clearFoods,
      }}
    >
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
