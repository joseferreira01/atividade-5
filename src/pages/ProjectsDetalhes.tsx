import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';

import api from '../services/api';
interface Product{
  id:number;
  title:string;
  url:string;
}
interface propsId{
  id:number;
}
const ProjectsDetales: React.FC = () => {
  const route = useRoute();

  const [project,setProduct]= useState<Product>();
  const {id} = route.params as propsId;

  useEffect(()=>{
    api.get(`projetos/${id}`).then(response=>{
      setProduct(response.data);
    })
  },[id]);

  if(!project){
    return (
      <View style={styles.container}>
        <Text style={styles.CarregandoText}> Carregando ...</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
      <Text style={styles.titleProject}>{project.title}</Text>
      <Text style={styles.titleProject}>Url: {project.url}</Text>
     
      </View>
    </View>
  )
    
  };
  const styles = StyleSheet.create({

  });

  export default ProjectsDetales;


// import { Container } from './styles';

