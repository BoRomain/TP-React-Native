import Button from "@/components/Button";
import mainStyles from "@/styles/main";
import {
  BarcodeScanningResult,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Camera() {
  const router = useRouter();

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  async function handleBarcodeScanned({ data }: BarcodeScanningResult) {
    const response = await fetch(
      "https://world.openfoodfacts.net/api/v2/product/" + data + ".json",
    );
    router.replace("/(main)/add");
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={mainStyles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={handleBarcodeScanned}
      />
      <View style={styles.buttonContainer}>
        <Button
          iconName="close"
          onPress={() => router.replace("/(main)/add")}
        />
        <Button
          iconName="camera-reverse"
          onPress={() => setFacing(facing === "back" ? "front" : "back")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 64,
  },
});
