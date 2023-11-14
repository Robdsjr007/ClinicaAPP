import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Details(){

    const routes = useRoute();
    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source = {require (`../../Img/${routes.params.imagem}`)} />
            <Text style={styles.texto}> {routes.params.titulo} </Text>
            <Text style={styles.texto}> {routes.params.nota} </Text>
            <Text style={styles.texto}> {routes.params.descricao} </Text>
            <Stars default={2.5}count={5}half={true}starSize={60}fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}/>
        </View>
    )
};

