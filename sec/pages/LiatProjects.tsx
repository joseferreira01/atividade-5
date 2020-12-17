import React ,{useState} from 'react';
import { View, ScrollView, StyleSheet,Text,TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api.'
import { useFocusEffect,useNavigation } from '@react-navigation/native';
// import { Container } from './styles';
interface Project{
  id: number;
  title: string;
  url:string
}

const ListProjects: React.FC = () => {
  const navigation = useNavigation();
  const [projects, setProjects] = useState<Project[]>([]);
  useFocusEffect(()=>{
    api.get('projetos').then(res=>{
      setProjects(res.data);
      
    })
  });
  function goToPageProjectRegiste(){
    navigation.navigate('ProjectsRegister');
  };
  function goToPageProjectDetalhes(id:number){
    navigation.navigate('ProjectsDetales',{id});
  };
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.IntenProjectsTitle}> Lista de Projetos</Text>
      {
        projects.map(project=>
          <View key={project.id} style={styles.ItemProjectContainer}> 
          <Text style={styles.ItemProjectTitle}> {project.title} </Text>
          <TouchableOpacity style={styles.goProjectsDetalhesButton}
           onPress={()=>{goToPageProjectDetalhes(project.id)}}>
              <Feather name="arrow-right" size={18} />
              
          </TouchableOpacity>
      </View>

        )
      }


      <View  style={styles.ItemProjectContainer}>
        <Text  style={styles.createProjectText}> Cadastrar Projects </Text>
        <RectButton style={styles.createProjectButton}
          onPress={goToPageProjectRegiste}
        >
        <Feather name="plus" size={18} />
        </RectButton>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  },
  IntenProjectsTitle:{
    color:'#393c9e',
    fontSize:24,
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    marginTop:30,
    textAlign:'center'
  },
  ItemProjectContainer:{
     height:30,
     width:30,
     padding: 20,
     marginTop:30,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems:'center',

  },
  ItemProjectTitle:{
    color:'#8889a5',
    fontSize:30,
    fontWeight:'400',
    width:100,
    marginLeft:30

  },
  createProjectButton:{
    backgroundColor:"#8889a5",
    borderRadius:28,
    height:60,
    paddingLeft:24,
    marginTop:80,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    elevation:3

  },
  goProjectsDetalhesButton:{
    width:100,
    height:30,
    backgroundColor: "#15d686",
    borderRadius:24,
    marginRight:60,
  },
  createProjectText:{
    color:'#fff',
    fontSize:28,
    fontWeight:'bold',
    marginLeft:10
  }
});

export default ListProjects;