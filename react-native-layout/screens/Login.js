import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/login.png')} style={styles.image} />
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
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
    borderColor: '#ccc' 
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
    alignItems: 'center' 
},
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' },
});
