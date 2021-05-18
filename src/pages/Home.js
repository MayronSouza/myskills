import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

export const Home= () => {
 return (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome, Mayron Souza</Text>
    <TextInput
      style={styles.input}
      placeholder='New Skill...'
      placeholderTextColor='#555'
    />
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>Add</Text>
    </TouchableOpacity>
    <Text style={styles.skills}>My Skills</Text>
  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 70 : 45,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 20,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 32,
    borderRadius: 8,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#a370f7',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skills: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  }
});