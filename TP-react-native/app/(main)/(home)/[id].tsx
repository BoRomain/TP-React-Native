import Meal from "@/class/Meal";
import Button from "@/components/Button";
import FoodCard from "@/components/FoodCard";
import { useMeal } from "@/contexts/MealContext";
import mainStyles from "@/styles/main";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MealDetail() {
  const { id } = useLocalSearchParams();
  const { meals, deleteMeal } = useMeal();
  const router = useRouter();

  const meal = meals.find((m) => m.id === id);

  function handleDeleteMeal(meal: Meal) {
    deleteMeal(meal);
    router.replace("/(main)/(home)");
  }

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView>
        <SafeAreaView style={mainStyles.container}>
          <Text style={mainStyles.title}>{meal?.type}</Text>
          <Text>{meal?.date}</Text>
          <View style={styles.box}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Total nutritionnel
            </Text>
            <View style={styles.horizontalBox}>
              <View
                style={{ ...styles.smallBox, borderColor: "hsl(93, 79%, 40%)" }}
              >
                <Text style={{ fontWeight: "bold" }}>Calories</Text>
                <Text>
                  {meal?.foods.reduce(
                    (acc, food) => acc + (food.calories || 0),
                    0,
                  ) || 0}{" "}
                  kcal
                </Text>
              </View>
              <View
                style={{
                  ...styles.smallBox,
                  borderColor: "hsl(198, 79%, 40%)",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Protéines</Text>
                <Text>
                  {meal?.foods.reduce(
                    (acc, food) => acc + (food.proteins || 0),
                    0,
                  ) || 0}{" "}
                  g
                </Text>
              </View>
              <View
                style={{ ...styles.smallBox, borderColor: "hsl(37, 79%, 40%)" }}
              >
                <Text style={{ fontWeight: "bold" }}>Glucides</Text>
                <Text>
                  {meal?.foods.reduce(
                    (acc, food) => acc + (food.carbs || 0),
                    0,
                  ) || 0}{" "}
                  g
                </Text>
              </View>
              <View
                style={{ ...styles.smallBox, borderColor: "hsl(0, 79%, 40%)" }}
              >
                <Text style={{ fontWeight: "bold" }}>Lipides</Text>
                <Text>
                  {meal?.foods.reduce(
                    (acc, food) => acc + (food.fats || 0),
                    0,
                  ) || 0}{" "}
                  g
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Aliments ({meal?.foods.length})
            </Text>
            {meal?.foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
      <Button
        title="Supprimer ce repas"
        iconName="trash"
        style={{ position: "absolute", bottom: 20 }}
        backgroundColor="red"
        onPress={() => handleDeleteMeal(meal!)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    padding: 10,
    marginBlock: 10,
  },
  horizontalBox: {
    flex: 1,
    flexDirection: "row",
  },
  smallBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
