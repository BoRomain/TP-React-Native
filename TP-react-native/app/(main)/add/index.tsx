import Food from "@/class/Food";
import Meal from "@/class/Meal";
import Button from "@/components/Button";
import FoodAddCard from "@/components/FoodAddCard";
import FoodSearchCard from "@/components/FoodSearchCard";
import mainStyles from "@/styles/main";
import { useRouter } from "expo-router";
import debounce from "lodash.debounce";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMeal } from "../../../contexts/MealContext";

export default function Add() {
  const router = useRouter();
  const { addMeal, foods, addFood, deleteFood, clearFoods } = useMeal();

  const [meal, setMeal] = useState<Meal>(new Meal());
  const [search, setSearch] = useState<string>("");
  const [foodSearchResult, setFoodSearchResult] = useState<Food[]>([]);

  const handleSearch = useMemo(
    () =>
      debounce(async (search: string) => {
        if (!search) {
          setFoodSearchResult([]);
          return;
        }
        const response = await fetch(
          `https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${search}&search_simple=1&action=process&json=1&fields=code,product_name,product_name_fr,product_name_en,brands,nutriments,image_url,nutriscore_grade&page_size=10`,
        );

        if (response.ok) {
          const data = await response.json();
          const foods = data.products.map((food: any) => {
            return {
              id: food.code,
              name: food.product_name,
              brand: food.brands,
              image_url: food.image_url,
              nutriscore: food.nutriscore_grade,
              calories: food.nutriments?.["energy-kcal_100g"],
              proteins: food.nutriments?.proteins_100g,
              carbs: food.nutriments?.carbohydrates_100g,
              fats: food.nutriments?.fat_100g,
            };
          });
          setFoodSearchResult(foods);
        }
      }, 400),
    [],
  );

  function handleDeleteFood(food: Food) {
    deleteFood(food);
  }

  function handleValidateMeal() {
    addMeal({ ...meal, foods, date: new Date().toISOString() });
    setMeal(new Meal());
    clearFoods();
    router.replace("/(main)/(home)");
  }

  return (
    <ScrollView>
      <SafeAreaView style={mainStyles.container}>
        <Text style={mainStyles.title}>Ajouter un repas</Text>
        <Text style={mainStyles.labelText}>Type de repas</Text>
        <TextInput
          value={meal.type}
          onChangeText={(type) => setMeal({ ...meal, type })}
          style={mainStyles.textInput}
          placeholder="Type de repas"
        />
        <Button
          title="Scanner le code barre"
          iconName="barcode"
          onPress={() => router.replace("/(main)/add/camera")}
        />
        <TextInput
          value={search}
          onChangeText={(search) => {
            setSearch(search);
            handleSearch(search);
          }}
          style={mainStyles.textInput}
          placeholder="Rechercher un aliment"
        />
        <Text style={mainStyles.labelText}>Recherches</Text>
        <ScrollView style={styles.list} nestedScrollEnabled={true}>
          {foodSearchResult.map((food) => (
            <FoodSearchCard
              key={food.id}
              food={food}
              onPress={() =>
                addFood({ ...food, id: new Date().getTime().toString() })
              }
            />
          ))}
        </ScrollView>
        <Button
          title="Valider le repas"
          iconName="checkmark"
          onPress={handleValidateMeal}
        />
        <Text style={mainStyles.labelText}>
          Aliments ajoutée ({foods.length})
        </Text>
        <ScrollView style={styles.list} nestedScrollEnabled={true}>
          {foods.map((food) => (
            <FoodAddCard
              key={food.id}
              food={food}
              onPress={() => handleDeleteFood(food)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    height: 200,
  },
});
