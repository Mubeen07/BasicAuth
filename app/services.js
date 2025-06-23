import { Alert } from "react-native";

const showAlert = ({ title, description, onConfirm }) =>
  Alert.alert(title, description, [
    {
      text: "No",
    },
    {
      text: "Yes",
      onPress: onConfirm,
    },
  ]);

export { showAlert };
