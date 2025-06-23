import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { HomeScreen, SignupScreen } from "./app/screens";

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
          <RootStack />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
