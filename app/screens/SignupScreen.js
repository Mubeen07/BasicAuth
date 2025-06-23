import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#F8FAFC",
      }}
    >
      <Header title={"Signup"} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textinput}
          maxLength={24}
          onChangeText={(e) => {
            console.log("eee >> ", e);
          }}
          placeholder='Name'
          // keyboardType="numeric"
        />
        <TextInput
          style={styles.textinput}
          maxLength={40}
          onChangeText={(e) => {
            console.log("eee >> ", e);
          }}
          placeholder='Email'
          keyboardType='email'
        />
        <TextInput
          style={styles.textinput}
          maxLength={16}
          onChangeText={(e) => {
            console.log("eee >> ", e);
          }}
          placeholder='Password'
          secureTextEntry
        />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 18,
        }}
      >
        <TouchableOpacity
          style={styles.backgroundButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <AlreadyHaveAccount />
    </View>
  );
};

const AlreadyHaveAccount = () => {
  return (
    <View style={styles.alreadyHaveAccount}>
      <View>
        <Text>Already have an account: </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.underLineButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 18,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: "#F8FAFC",
    flexDirection: "column", // stack vertically
    width: "100%",
  },
  textinput: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  alreadyHaveAccount: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: "#BCCCDC",
  },
  underLineButton: {
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBlockColor: "#3FA2F6",
    color: "#3FA2F6",
  },
  backgroundButton: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3FA2F6",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#3FA2F6",
  },
});

export { SignupScreen };
