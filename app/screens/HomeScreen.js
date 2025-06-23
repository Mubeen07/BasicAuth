import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../contextApi/AuthContext";
import { Header } from "../components";
import { showAlert } from "../services";

const HomeScreen = () => {
  const { user, logout, hardDelete } = useAuth();

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Header title={`Welcome ${user.name}`} />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 20,
          paddingBottom: 12,
          borderBottomWidth: 1,
          borderColor: "#BCCCDC",
        }}
      >
        <View>
          <Text>{`Would like to `}</Text>
        </View>
        <TouchableButton text={"Logout!"} onPress={logout} />
      </View>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderColor: "#BCCCDC",
          width: "90%",
        }}
      >
        <View>
          <RenderUserInfo label={"Name: "} value={user.password} />
          <RenderUserInfo label={"Email: "} value={user.email} />
        </View>
      </View>
      <View
        style={{
          padding: 20,
        }}
      >
        <TouchableButton
          text={"Delete"}
          color='#F95454'
          onPress={() =>
            showAlert({
              title: "Are you sure!",
              description: `Your account and all data will be permanently deleted. This action is irreversible.`,
              onConfirm: () => hardDelete(),
            })
          }
        />
      </View>
    </View>
  );
};

const RenderUserInfo = ({ label, value }) => (
  <Text
    style={{
      marginBottom: 8,
    }}
  >
    <Text
      style={{
        fontWeight: "bold",
      }}
    >
      {label}
    </Text>
    {value}
  </Text>
);

const TouchableButton = ({ text, onPress, color = "#3FA2F6" }) => (
  <TouchableOpacity onPress={onPress}>
    <Text
      style={{
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBlockColor: color,
        color: color,
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

export { HomeScreen };
