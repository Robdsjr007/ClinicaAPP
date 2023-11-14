import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useRoute } from '@react-navigation/native'

export default function HomeP({ navigation }) {

  const routes = useRoute();

  const GetP = () => {
    navigation.navigate('GetP');
  };

  const PostP = () => {
    navigation.navigate('PostP');
  };

  const PutP = () => {
    navigation.navigate('PutP');
  };

  const DeleteP = () => {
    navigation.navigate('DeleteP');
  };

  return (




    <View style={styles.container}>

      <Image
        source={require('../../../Img/HospitalP.png')}
        style={styles.imagem}
      />

      <View style={styles.containerButton}>

        <View style={styles.row}>
          <View style={styles.column}>
            {/* Botão para navegar para o Get */}
            <TouchableOpacity style={[styles.customButton, { backgroundColor: '#3498db' }]} onPress={GetP}>
              <Text style={styles.buttonText}>Get</Text>
            </TouchableOpacity>
            {/* Botão para navegar para a tela 'Put_Post' Post */}
            <TouchableOpacity style={[styles.customButton, { backgroundColor: '#2ecc71' }]} onPress={PostP}>
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            {/* Botão para navegar para a tela 'Put'*/}
            <TouchableOpacity style={[styles.customButton, { backgroundColor: '#e67e22' }]} onPress={PutP}>
              <Text style={styles.buttonText}>Put</Text>
            </TouchableOpacity>
            {/* Botão para navegar para o Delete */}
            <TouchableOpacity style={[styles.customButton, { backgroundColor: '#e74c3c' }]} onPress={DeleteP}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );
};