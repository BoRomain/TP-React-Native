import Meal from "@/class/Meal";
import Button from "@/components/Button";
import styles from "@/styles/main";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Add() {
  const router = useRouter();

  const [meal, setMeal] = useState<Meal>(new Meal());
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ajouter un repas</Text>
      <Text style={styles.labelText}>Type de repas</Text>
      <TextInput
        value={meal.type}
        onChangeText={(type) => setMeal({ ...meal, type })}
        style={styles.textInput}
        placeholder="Type de repas"
      />
      <Button
        title="Scanner le code barre"
        iconName="barcode"
        onPress={() => router.replace("/(main)/add/camera")}
      />
      <Button
        title="Rechercher"
        iconName="search"
        onPress={() => console.log("Rechercher")}
      />
      <Button
        title="Valider le repas"
        iconName="checkmark"
        onPress={() => console.log("Ajouter le repas")}
      />
    </SafeAreaView>
  );
}
