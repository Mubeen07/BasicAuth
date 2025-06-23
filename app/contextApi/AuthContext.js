import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateEmail, validatePassword } from "../utils";

const AuthContext = createContext();

const USER_LIST = "USER_LIST";
const LOGGEDIN_USER = "LOGGEDIN_USER";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const loggedInUser = await AsyncStorage.getItem(LOGGEDIN_USER);
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const register = async ({ name, email, password }) => {
    if (!validateEmail(email)) throw new Error("Please enter a valid email!");
    if (!validatePassword(password))
      throw new Error("Password should follow alpha numeric only!");

    const userData = { name, email, password };
    let storedUserList = await AsyncStorage.getItem(USER_LIST);
    setUser(JSON.parse(storedUserList));
    if (storedUserList) storedUserList.push(userData);
    else storedUserList = [userData];
    await AsyncStorage.setItem(USER_LIST, JSON.stringify(storedUserList));
    await AsyncStorage.setItem(LOGGEDIN_USER, JSON.stringify(userData));
    setUser(userData);
  };

  const login = async ({ email, password }) => {
    const stored = await AsyncStorage.getItem(USER_LIST);
    if (!stored) throw new Error("User not registered");

    const parsedList = JSON.parse(stored);
    const userInfo = parsedList.find(
      (u) => u.email == email && u.password == password
    );
    if (userInfo) {
      setUser(userInfo);
      await AsyncStorage.setItem(LOGGEDIN_USER, JSON.stringify(userInfo));
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem(LOGGEDIN_USER);
    setUser(null);
  };

  const hardDelete = async () => {
    const stored = await AsyncStorage.getItem(USER_LIST);
    const parsedList = JSON.parse(stored);
    const filteredUserList = parsedList.filter((u) => u.email !== user.email);
    await AsyncStorage.setItem(USER_LIST, JSON.stringify(filteredUserList));
    await logout();
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, loading, hardDelete }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
