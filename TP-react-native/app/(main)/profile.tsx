import { SignOutButton } from "@/components/sign-out-button";
import mainStyles from "@/styles/main";
import { useUser } from "@clerk/clerk-expo";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMeal } from "../../contexts/MealContext";

export default function Profile() {
  const { meals } = useMeal();
  const { isLoaded, user } = useUser();

  return (
    <SafeAreaView style={mainStyles.container}>
      <Text style={mainStyles.title}>Profile</Text>
      <View style={styles.box}>
        <Text style={{ fontWeight: "bold" }}>
          {user?.emailAddresses[0].emailAddress}
        </Text>
        <SignOutButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
