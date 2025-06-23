import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { HomeScreen, SignupScreen } from "./app/screens";
import { AuthProvider, useAuth } from "./app/contextApi/AuthContext";

const Stack = createNativeStackNavigator();
function RootStack() {
  const { loading, user } = useAuth();
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // If user is logged in
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      ) : (
        // If not logged in
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
      )}
      {/* <Stack.Screen name='AnyScreen' component={AnyScreen} /> 
      any screen which no dependant on auth */}
    </Stack.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <StatusBar
              barStyle={isDarkMode ? "light-content" : "dark-content"}
            />
            <RootStack />
          </View>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
