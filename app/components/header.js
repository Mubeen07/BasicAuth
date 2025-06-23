import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          marginTop: "10%",
        }}
      >
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#60B5FF",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#F8FAFC",
    padding: 16,
  },
});

export { Header };
