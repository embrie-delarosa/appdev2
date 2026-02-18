import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#666" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Signup pressed')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
        <Text style={{ color: '#007AFF' }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 15, width: '100%' },
  icon: { marginRight: 10 },
  input: { flex: 1, height: 40 },
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5, width: '100%', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
