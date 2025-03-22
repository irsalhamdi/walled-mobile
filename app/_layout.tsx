import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import { Tabs } from "expo-router"; 

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Tabs: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
