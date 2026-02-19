import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { MealProvider } from "../../contexts/MealContext";
import { View } from "react-native";

export default function RootLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/login"} />;
  }

  return (
    <MealProvider>
      <View style={{ flex: 1 }}>
        <Tabs>
          <Tabs.Screen
            name="(home)"
            options={{
              title: "Acceuil",
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="add"
            options={{
              title: "Ajouter",
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  name={focused ? "add" : "add-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profil",
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      </View>
    </MealProvider>
  );
}
