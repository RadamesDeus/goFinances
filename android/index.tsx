import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';

import {styles} from './styles';
import {Button} from '../../components/Button';
import CardSkill from '../../components/cardSkill';

import {iSkill} from 'src/interfaces';

const Home = () => {
  const [newSkills, setNewSkills] = useState('');
  const [listSkills, setListSkills] = useState<iSkill[]>([]);

  const hendleSetListSkils = () => {
    const dataSkill: iSkill = {
      id: String(new Date().getTime()),
      name: newSkills,
    };

    if (!listSkills.find((skill) => skill.name === newSkills)) {
      setListSkills([...listSkills, dataSkill]);
      setNewSkills('');
    }
  };
  const handleRemoveSkill = (skill: iSkill) => {
    const newListSkills = listSkills.filter((s) => s.id !== skill.id);
    setListSkills(newListSkills);
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Radames, Bem vindo</Text>
      {/* <Text style={styles.title}>bom dia</Text> */}

      <TextInput
        value={newSkills}
        style={styles.input}
        placeholder="skills"
        placeholderTextColor="#777"
        onChangeText={setNewSkills}
      />

      <Button description="New Skill" onPress={hendleSetListSkils} />

      <Text style={[styles.title, {fontSize: 18, marginTop: 30}]}>
        My Skills
      </Text>

      <FlatList
        data={listSkills}
        keyExtractor={(item) => item.id}
        renderItem={({item: skill}) => (
          <CardSkill onPress={() => handleRemoveSkill(skill)} skill={skill} />
        )}
      />
    </View>
  );
};

export default Home;
