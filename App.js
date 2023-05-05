import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-native-paper";
import { theme } from "./src/core/theme";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import StartScreen from "./src/screens/StartScreen";
import { LogBox } from 'react-native';
import Statistic from "./src/screens/Statistic"
import Dashboard from "./src/screens/Dashboard"
import Medicine from './src/screens/Medicine';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state', 'syncStorage has been extracted from react-native core and will be removed in a future release', 'Warning: Each child in a list should have a unique "key" prop']);
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Dashboard"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name="Statistic"
                        screenOptions={{
                            headerShown: false,
                        }}
                        component={Statistic} />
                    <Stack.Screen
                        name="ResetPasswordScreen"
                        component={ResetPasswordScreen}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}