import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const SkillCard = () => {
  return (
    <TouchableOpacity
      style={styles.skill}
      key={index}
    >
      <Text style={styles.skillText}>skill</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skill: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 20,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 16,
    borderRadius: 50,
  },
  skillText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});