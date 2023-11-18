import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './style';

export default function DeletePaciente() {
  const [numeroBeneficiario, setNumeroBeneficiario] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost/Teste_Unitario_PHP/server/delete/delete.php?numeroBeneficiario=${numeroBeneficiario}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', data.mensagem);
      } else {
        Alert.alert('Erro', data.mensagem);
      }
    } catch (error) {
      console.error('Erro ao excluir paciente:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Excluir Paciente</Text>
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
