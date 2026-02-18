import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="main/home/index" options={{ title: "Acceuil" }} />
      <Tabs.Screen name="add" options={{ title: "Ajouter" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}
