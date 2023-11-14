import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import Input from '../../../components/InputBar';
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
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.inputDiv}>
            <Text style={styles.Text}>Nº Beneficiário:</Text>
            <Input style={styles.input} />
          </View>
        </View>
      </View>


      <TouchableOpacity style={styles.sendButton} onPress={''}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>


    </View>

    



  );
};