import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignupScreen';
import HomeScreen from '../screens/Feed/HomeScreen';
import { AuthStackParamList } from '../types/AuthStackParamList';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // This hides the header for all screens in the stack
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
