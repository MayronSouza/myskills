import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => setMySkills(
    oldState => [...oldState, newSkill]
  );

 return (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome, Mayron Souza</Text>
    <TextInput
      style={styles.input}
      placeholder='New Skill...'
      placeholderTextColor='#555'
      onChangeText={setNewSkill}
    />
    <Button onPress={handleAddNewSkill}/>
    <FlatList
      data={mySkills}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <SkillCard skill={item}/>
      )}
    />
    {/* {
      mySkills.map((skill, index) => (
        
      ))
    } */}
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
});