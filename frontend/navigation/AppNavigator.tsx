import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Feed/HomeScreen';

type AppStackParamList = {
    Home: undefined;
    // Add other screens as needed
};

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* Add other screens as needed */}
        </Stack.Navigator>
    );
};

export default AppNavigator;
