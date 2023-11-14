import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import HomeP from '../screens/Paciente/Home/index';
import GetP from '../screens/Paciente/Get';
import PostP from '../screens/Paciente/Post';
import PutP from '../screens/Paciente/Put';
import DeleteP from '../screens/Paciente/Delete';

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='home'
                    component={Home}
                    options={{ headerShown: false }}
                />

                {/* Telas Paciente */}

                <Stack.Screen
                    name='HomeP'
                    component={HomeP}
                    options={{
                        title: "Home do Paciente",
                        headerTransparent: true,
                        headerTintColor: '#ffff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            borderRadius: 20,
                            padding: 10
                        }
                    }}
                />
                <Stack.Screen
                    name='GetP'
                    component={GetP}
                    options={{
                        title: "Get do Paciente",
                        headerTransparent: true,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            borderRadius: 20,
                            padding: 10
                        }
                    }}
                />
                
                <Stack.Screen
                    name='PostP'
                    component={PostP}
                    options={{
                        title: "Post do Paciente",
                        headerTransparent: true,
                        headerTintColor: '#ffff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            borderRadius: 20,
                            padding: 10
                        }
                    }}
                />
                <Stack.Screen
                    name='PutP'
                    component={PutP}
                    options={{
                        title: "Put do Paciente",
                        headerTransparent: true,
                        headerTintColor: '#ffff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            borderRadius: 20,
                            padding: 10
                        }
                    }}
                />

                <Stack.Screen
                    name='DeleteP'
                    component={DeleteP}
                    options={{
                        title: "Delete do Paciente",
                        headerTransparent: true,
                        headerTintColor: '#ffff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            borderRadius: 20,
                            padding: 10
                        }
                    }}
                />

                {/* Telas Médico */}


            </Stack.Navigator>
        </NavigationContainer>
    );
}
