import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/images/login.png')} style={styles.image} />

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Login pressed')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupLink}>
        <Text style={styles.signupText}>
          Don't have an account yet? <Text style={{ color: '#007AFF' }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  image: { 
    width: 200, 
    height: 200, 
    marginBottom: 20 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
    borderBottomWidth: 1, 
    borderColor: '#ccc', 
    width: '100%'
  },
  icon: { 
    marginRight: 10 
  },
  input: { 
    flex: 1, 
    height: 40 
  },
  button: { 
    backgroundColor: '#007AFF', 
    padding: 10, 
    borderRadius: 5, 
    width: '100%', 
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  signupLink: { 
    marginTop: 15 
  },
  signupText: { 
    fontSize: 14, 
    color: '#666' 
  },
});
