import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <Text>Course & Section: BSIT 3A</Text>
      <Text>Name: Embrie Dela Rosa</Text>
      <Text>Age: 22</Text>
      <Text>Favorite Hobby: Riding a bike</Text>

      <Text style={styles.subtitle}>Short Bio:</Text>
      <Text>
        I am a 3rd year IS student who is always curious when the topic is interesting and enjoys exploring new ideas to gain general knowledge (info dump :D).
      </Text>

      <Text style={styles.subtitle}>Pet Peeves:</Text>
      <Text>- Si ano</Text>
      <Text>- People who don't have empathy</Text>
      <Text>- User friendly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
