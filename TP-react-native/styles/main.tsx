import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(203, 32%, 92%)",
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "hsl(203, 32%, 96%)",
    fontSize: 16,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    borderColor: "hsla(0, 0%, 15%, 0.2)",
    borderWidth: 1,
  },
  picker: {
    backgroundColor: "hsl(203, 32%, 96%)",
    borderRadius: 10,
  },
});

export default styles;
