import React,{useState} from 'react';
import { ScrollView, View,StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import api from '../services/api';

// import { Container } from './styles';

const ProjectsRegister: React.FC = () => {
  const navigation = useNavigation();
  
  const [title, setTitle]= useState('');
  const [url, setUrl]= useState('');
  

  async function criarProject(){
    const project ={
      title,
      url
     
    }
    await api.post('projetos',project);
    navigation.navigate('ListProjects');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}> Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}> Url </Text>
      <TextInput
        style={[styles.input, {height:110}]}
        value={url}
        multiline
        onChangeText={setUrl}
      />

      
      <RectButton style={styles.RegisterButton} onPress={criarProject}>
        <Text style={styles.RegisterText}> Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default ProjectsRegister