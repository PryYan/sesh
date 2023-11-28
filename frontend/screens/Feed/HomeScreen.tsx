import React from 'react';
import { View, Button, Image, StyleSheet, ViewStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../types/AuthStackParamList'; // Import the type
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type HomeScreenProps = {
    navigation: StackNavigationProp<AuthStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

    const sharedButtonStyle: ViewStyle = {
        ...styles.buttonContainer,
        backgroundColor: '#d58459',
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../../assets/Sesh-logo_white.png')}
                style={styles.logo}
            />

            {/* Buttons */}
            <View style={[sharedButtonStyle, { backgroundColor: '#985e40' }]}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                    color="#fff"
                />
            </View>
            <View style={sharedButtonStyle}>
                <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate('SignUp')}
                    color="#fff"
                />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f39766',
    },
    logo: {
        width: wp('50%'), // Width is 50% of the screen width
        height: hp('50%'), // Height is 20% of the screen height
        marginTop: hp('5%'),
        marginBottom: hp('2%'),
    },
    buttonContainer: {
        marginVertical: 10,
        width: '70%', // Adjust the width of the buttons
        borderRadius: 8, // Border radius for rounded corners
    }
});

export default HomeScreen;
