import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./app/Redux/store";
import RestaurantScreen from "./app/screens/RestaurantScreen";
import Busketscren from "./app/screens/Busketscren";
import Preparingscreen from "./app/screens/Preparingscreen";
import Deliveryscreen from "./app/screens/Deliveryscreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="busket" component={Busketscren}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen name="prepscreen" component={Preparingscreen}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen name="delivery" component={Deliveryscreen}
              options={{ presentation: "modal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
