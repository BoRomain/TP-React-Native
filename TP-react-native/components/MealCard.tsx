import Meal from "@/class/Meal";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  meal: Meal;
}

export default function MealCard({ meal }: Props) {
  const router = useRouter();
  function handleShowDetail() {
    router.push(`/(main)/(home)/${meal.id}`);
  }
  return (
    <Pressable style={styles.box} onPress={handleShowDetail}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{meal.type}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", color: "hsl(93, 79%, 40%)" }}>
          {meal.foods?.reduce((acc, food) => acc + (food.calories || 0), 0) ||
            0}
          kcal
        </Text>
        <Text>{meal.foods.length} aliments</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
