import styles from "@/styles/main";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.title}>Profile</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
