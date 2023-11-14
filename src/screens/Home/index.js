import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function HomePaciente({ navigation }) {
  const HomeP = () => {
    navigation.navigate('HomeP'); 
  };

  const GetP = () => {
    navigation.navigate('GetP'); 
  };

  const Delete = () => {
    navigation.navigate('Delete'); 
  };

  return (
    <View style={styles.container}>
      {/* Imagem */}
      <Image
        source={require('../../Img/Hospital.png')}
        style={styles.image}
      />

      {/* Botão para navegar para a tela 'Home do Paciente' */}
      <TouchableOpacity style={styles.button} onPress={HomeP}>
        <Text style={styles.buttonText}>Paciente</Text>
      </TouchableOpacity>

      {/* Botão para navegar para outra tela */}
      <TouchableOpacity style={styles.button} onPress={''}>
        <Text style={styles.buttonText}>Em breve</Text>
      </TouchableOpacity>

      {/* Botão para navegar para uma tela*/}
      <TouchableOpacity style={styles.button} onPress={""}>
        <Text style={styles.buttonText}>????</Text>
      </TouchableOpacity>
    </View>
  );
};
