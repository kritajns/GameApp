import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./TabRoutes";
import Settings from "../screens/Settings";
import AwardsPage from "../screens/Awards";
import Strategies from "../screens/Strategies";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Awards" component={AwardsPage} />
            <Stack.Screen name="Strategies" component={Strategies} />

        </Stack.Navigator>
    );
};

export default Routes;
