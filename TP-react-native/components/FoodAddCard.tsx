import Food from "@/class/Food";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

interface Props {
  food: Food;
  onPress?: () => void;
}

export default function FoodAddCard({ food, onPress }: Props) {
  return (
    <View style={styles.box}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text>{food.name}</Text>
          <Text style={styles.smallText}>
            {food.brand} - {food.calories} kcal
          </Text>
        </View>
        <Button
          title="Supprimer"
          iconName="close"
          backgroundColor="red"
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  smallText: { color: "gray" },
});
