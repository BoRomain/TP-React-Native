import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Slot } from "expo-router";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(main)/(home)"} />;
  }

  return <Slot />;
}
