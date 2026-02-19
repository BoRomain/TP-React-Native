import Food from "@/class/Food";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  food: Food;
}

export default function FoodCard({ food }: Props) {
  return (
    <View style={styles.box}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={{ uri: food.image_url }}
          style={{ width: 50, height: 50, borderRadius: 8 }}
        />
        <View style={{ flex: 1 }}>
          <Text>{food.name}</Text>
        </View>
      </View>
      <View style={styles.horizontalBox}>
        <View style={{ ...styles.smallBox, borderColor: "hsl(93, 79%, 40%)" }}>
          <Text style={{ fontWeight: "bold" }}>Calories</Text>
          <Text>{food.calories} kcal</Text>
        </View>
        <View style={{ ...styles.smallBox, borderColor: "hsl(198, 79%, 40%)" }}>
          <Text style={{ fontWeight: "bold" }}>Protéines</Text>
          <Text>{food.proteins} g</Text>
        </View>
        <View style={{ ...styles.smallBox, borderColor: "hsl(37, 79%, 40%)" }}>
          <Text style={{ fontWeight: "bold" }}>Glucides</Text>
          <Text>{food.carbs} g</Text>
        </View>
        <View style={{ ...styles.smallBox, borderColor: "hsl(0, 79%, 40%)" }}>
          <Text style={{ fontWeight: "bold" }}>Lipides</Text>
          <Text>{food.fats} g</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBlock: 10,
    gap: 10,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
