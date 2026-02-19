import Button from "@/components/Button";
import MealCard from "@/components/MealCard";
import { useMeal } from "@/contexts/MealContext";
import styles from "@/styles/main";
import { useRouter } from "expo-router";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { meals } = useMeal();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Acceuil</Text>
      <Button
        title="Ajouter un repas"
        iconName="add"
        onPress={() => {
          router.replace("/(main)/add");
        }}
      />
      <FlatList
        data={meals}
        renderItem={({ item }) => <MealCard meal={item} />}
      />
    </SafeAreaView>
  );
}
