import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

type IconName = keyof typeof Ionicons.glyphMap;

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  iconName?: IconName;
  iconSize?: number;
  iconColor?: string;
  iconPosition?: "left" | "right";
  buttonStyle?: ViewStyle;
  backgroundColor?: string;
  textStyle?: TextStyle;
  rounded?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  title = "",
  iconName,
  iconSize = 20,
  iconColor = "white",
  iconPosition = "left",
  buttonStyle,
  backgroundColor = "#007AFF",
  textStyle,
  rounded = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          ...styles.button,
          borderRadius: rounded ? "100%" : 8,
          backgroundColor,
        },
        buttonStyle,
      ]}
    >
      {iconName && iconPosition === "left" && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.iconLeft}
        />
      )}

      <Text style={[styles.text, textStyle]}>{title}</Text>

      {iconName && iconPosition === "right" && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.iconRight}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default Button;
