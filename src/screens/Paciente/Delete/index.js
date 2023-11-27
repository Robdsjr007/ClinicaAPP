import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './style';
import { useRoute } from '@react-navigation/native'

export default function DeletePaciente({navigation}) {
  const routes = useRoute();
  const GetP = () => {
  navigation.navigate('GetP');
  };

  const [numeroBeneficiario, setNumeroBeneficiario] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://etec199-2021-robsondias.atwebpages.com/SW/clinicaPHP/delete/delete.php?numeroBeneficiario=${numeroBeneficiario}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        GetP();
      } else {
        Alert.alert('Erro', data.mensagem);
      }
    } catch (error) {
      console.error('Erro ao excluir paciente:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Excluir Paciente</Text>
      <TextInput
        style={styles.input}
        placeholder="Número Beneficiário"
        onChangeText={(text) => setNumeroBeneficiario(text)}
        value={numeroBeneficiario}
        keyboardType="numeric"
      />
      <Button title="Excluir Paciente" onPress={handleDelete} />
    </View>
  );
}
