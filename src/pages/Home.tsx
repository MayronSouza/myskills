import React, { useState, useEffect } from 'react';
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

interface SkillData {
  id: string;
  name:string;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getUTCHours() - 3;
    
    if (currentHour < 12) {
      setGreeting('Good Morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon!');
    } else {
      setGreeting('Good Night!');
    }
  }, []);

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setMySkills(
      oldState => [...oldState, data]
    );
  }
 return (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome, Mayron Souza</Text>
    <Text style={styles.greetingText}>{greeting}</Text>
    <TextInput
      style={styles.input}
      placeholder='New Skill...'
      placeholderTextColor='#555'
      onChangeText={setNewSkill}
    />
    <Button onPress={handleAddNewSkill}/>
    <FlatList
      data={mySkills}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <SkillCard skill={item.name}/>
      )}
    />
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
  greetingText: {
    color: '#fff',
  },
});