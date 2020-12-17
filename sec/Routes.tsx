import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ListProjects from './pages/LiatProjects'
import ProjectsDetales from './pages/ProjectsDetalhes';
import ProjectsRegister from './pages/ProjectsRegister'
import ProductsDetales from './pages/ProjectsDetalhes';

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator>
          <Screen name='ListProjects' component={ListProjects}/>
          <Screen name='ProjectsDetales' component={ProductsDetales}/>
          <Screen name='ProjectsRegister' component={ProjectsRegister}/>
        </Navigator>
        
       


    </NavigationContainer>
  );
}

export default Routes;