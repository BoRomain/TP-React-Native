import Food from "@/class/Food";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

interface Props {
  food: Food;
  onPress?: () => void;
}

export default function FoodSearchCard({ food, onPress }: Props) {
  return (
    <View style={styles.box}>
      <Image
        source={{ uri: food.image_url }}
        style={{ width: 50, height: 50, borderRadius: 8 }}
      />
      <View style={{ flex: 1 }}>
        <Text>{food.name}</Text>
        <Text style={styles.smallText}>
          {food.brand} - {food.calories} kcal
        </Text>
      </View>
      <Button title="Ajouter" iconName="add" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  smallText: { color: "gray" },
});
