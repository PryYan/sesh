import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../types/AuthStackParamList';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';

type SignUpScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, 'SignUp'>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  };

  const validateUsername = () => {
    const isValid = username.length >= 3;
    setIsUsernameValid(isValid);
    return isValid;
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(password);
    setIsPasswordValid(isValid);
    return isValid;
  };

  const handleSignUp = () => {
    const isEmailValid = validateEmail();
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isUsernameValid && isPasswordValid) {
      console.log('Sign up successful!');
    } else {
      console.log('Validation failed. Please check your inputs.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -50 : 0}
    >
      <Image
        source={require('../../assets/Sesh-logo_transparent.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Create your account</Text>

      {/* Email input with icon */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={RFValue(20)} color="#000" style={styles.icon} />
        <TextInput
          style={[styles.input, styles.topInput, !isEmailValid && styles.inputError]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {!isEmailValid && <Text style={styles.errorText}>Enter a valid email address</Text>}

      {/* Username input with icon */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={RFValue(20)} color="#000" style={styles.icon} />
        <TextInput
          style={[styles.input, styles.topInput, !isUsernameValid && styles.inputError]}
          placeholder="Username"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      {!isUsernameValid && <Text style={styles.errorText}>Username must be at least 3 characters</Text>}

      {/* Password input with icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={RFValue(20)} color="#000" style={styles.icon} />
        <TextInput
          style={[styles.input, styles.topInput, !isPasswordValid && styles.inputError]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      {!isPasswordValid && (
        <Text style={styles.errorText}>
          Password must be at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={handleSignUp}
          color="#fff"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: RFValue(40),
  },
  logo: {
    width: RFValue(200),
    height: RFValue(200),
    marginBottom: RFValue(10),
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginBottom: RFValue(20),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: RFValue(10),
  },
  input: {
    width: RFValue(225),
    height: RFValue(40),
    backgroundColor: '#fff',
    borderRadius: RFValue(8),
    marginBottom: RFValue(5),
    paddingHorizontal: RFValue(10),
  },
  topInput: {
    marginTop: RFValue(20),
  },
  inputError: {
    borderColor: 'red',
    borderWidth: RFValue(1),
  },
  errorText: {
    color: 'red',
    marginBottom: RFValue(10),
  },
  buttonContainer: {
    width: '70%',
    backgroundColor: '#f39766',
    borderRadius: RFValue(8),
  },
});

export default SignUpScreen;
