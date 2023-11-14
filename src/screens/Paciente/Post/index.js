import React from 'react';
import { useRoute } from '@react-navigation/native';
import Input from '../../../components/InputBar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';


export default function Telas({ navigation }) {

  const GetP = () => {
    navigation.navigate('GetP');
  };

  const PutP = () => {
    navigation.navigate('PutP');
  };

  const DeleteP = () => {
    navigation.navigate('DeleteP');
  };


  const routes = useRoute();
  return (
    <View style={styles.container}>

      <Image
        source={require('../../../Img/Paciente1.png')}
        style={styles.imagem}
      />

      <View style={styles.inputDiv}>
        <Text style={styles.text}>Nº Beneficiário:</Text>
        <Input style={styles.input} />
      </View>
      <View style={styles.inputDiv}>
        <Text style={styles.text}>Nome:</Text>
        <Input style={styles.input} />
      </View>
      <View style={styles.inputDiv}>
        <Text style={styles.text}>Telefone:</Text>
        <Input style={styles.input} />
      </View>


      <View style={styles.inputDiv}>
        <Text style={styles.text}>Endereço:</Text>
        <Input style={styles.input} />
      </View>
      <View style={styles.inputDiv}>
        <Text style={styles.text}>Remédio de Uso Contínuo:</Text>
        <Input style={styles.input} />
      </View>
      <View style={styles.inputDiv}>
        <Text style={styles.text}>Doenças Prévias:</Text>
        <Input style={styles.input} />
      </View>


      <TouchableOpacity style={styles.sendButton} onPress={''}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>



      <View style={styles.row}>
        <TouchableOpacity style={styles.square} onPress={GetP}>
          <View>
            <FontAwesome name="arrow-circle-up" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.square, styles.ActButton]}>
          <View>
            <FontAwesome name="plus" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={PutP}>
          <View>
            <FontAwesome name="pencil" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={DeleteP}>
          <View>
            <FontAwesome name="trash" size={30} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} >
          <View>
            <FontAwesome name="undo" size={30} color="white" />
          </View>
        </TouchableOpacity>

        


      </View>
    </View>
  );
}

