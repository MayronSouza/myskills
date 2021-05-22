import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Platform,
  StyleSheet,
} from 'react-native';

interface SkillProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...rest }: SkillProps) => {
  return (
    <TouchableOpacity
      style={styles.skill}
      {...rest}
    >
      <Text style={styles.skillText}>{skill}</Text>
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