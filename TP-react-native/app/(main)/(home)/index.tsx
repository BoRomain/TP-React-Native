import styles from "@/styles/main";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Acceuil</Text>
    </SafeAreaView>
  );
}
