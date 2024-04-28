import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Dashboard/Home";
import { Text, StyleSheet } from "react-native";
import DailyPage from "../screens/Daily";
import ExplorePage from "../screens/Explore";
import Statistics from "../screens/Statistics";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    titleText: {},
});

export default function TabRoutes() {
    return (
        <Tab.Navigator initialRouteName="HomePage" screenOptions={{
            headerShown: false,
            tabBarStyle: {
                paddingBottom: 5,
            },
        }}>
            <Tab.Screen name="HomePage" component={Home} options={{
                tabBarLabel: () => (
                    <Text style={styles.titleText}>Main</Text>
                )
            }} />
            <Tab.Screen name="Daily" component={DailyPage} options={{
                tabBarLabel: () => (
                    <Text style={styles.titleText}>Daily</Text>
                )
            }} />
            <Tab.Screen name="Explore" component={ExplorePage} options={{
                tabBarLabel: () => (
                    <Text style={styles.titleText}>Explore</Text>
                )
            }} />
            <Tab.Screen name="Statistics" component={Statistics} options={{
                tabBarLabel: () => (
                    <Text style={styles.titleText}>Statistics</Text>
                )
            }} />
        </Tab.Navigator>
    )
}