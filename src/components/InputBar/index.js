import React from 'react'
import { TextInput,View,TouchableOpacity } from 'react-native'
import styles from './style'


export default function Input(){

    return(
          <View  style = {styles.containerSearch}>
              <TextInput
               style = {styles.inputSearch}
               >
               </TextInput>
          </View>      

        );

}