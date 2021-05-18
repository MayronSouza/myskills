import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity
      style={styles.btn}
      // onPress={handleAddNewSkill}
    >
      <Text style={styles.btnText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#a370f7',
    padding: 10,
    borderRadius: 8,
    marginTop: 24,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});