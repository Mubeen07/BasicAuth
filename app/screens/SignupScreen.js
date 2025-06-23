import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Header } from "../components";
import { useAuth } from "../contextApi/AuthContext";

const SignupScreen = () => {
  const { register, login } = useAuth();
  const [isRegister, setIsRegister] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");
      if (isRegister) {
        await register(form);
      } else {
        await login(form);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setError("");
  }, [form]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#F8FAFC",
      }}
    >
      <Header title={isRegister ? `Signup` : "Signin"} />
      <View style={styles.formContainer}>
        {isRegister && (
          <TextInput
            style={styles.textinput}
            placeholder='Name'
            maxLength={24}
            value={form.name}
            onChangeText={(v) => setForm({ ...form, name: v })}
          />
        )}
        <TextInput
          style={styles.textinput}
          placeholder='Email'
          maxLength={40}
          value={form.email}
          onChangeText={(e) => setForm({ ...form, email: e.toLowerCase() })}
          keyboardType='email'
        />
        <TextInput
          style={styles.textinput}
          placeholder='Password'
          maxLength={16}
          value={form.password}
          onChangeText={(p) => setForm({ ...form, password: p })}
          secureTextEntry
        />
      </View>
      {error ? (
        <View
          style={{
            padding: 10,
            paddingHorizontal: 20,
            width: "100%",
          }}
        >
          <Text style={{ color: "red" }}>{error}</Text>
        </View>
      ) : null}

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
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            {isRegister ? `Register` : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
      <AlreadyHaveAccount
        isRegister={isRegister}
        onLoginPress={() => setIsRegister(!isRegister)}
      />
    </View>
  );
};

const AlreadyHaveAccount = ({ isRegister, onLoginPress }) => {
  return (
    <View style={styles.alreadyHaveAccount}>
      <View>
        <Text>
          {isRegister ? `Already have an account? ` : `Don't have an account? `}
        </Text>
      </View>
      <TouchableOpacity onPress={onLoginPress}>
        <Text style={styles.underLineButton}>
          {isRegister ? `Login` : `Register Now`}
        </Text>
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
