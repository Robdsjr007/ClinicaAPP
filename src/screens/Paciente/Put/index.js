import React, { useState } from 'react';
import styles from './style';
import { View, Text, TextInput, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PutP = ({ navigation }) => {
  const routes = useRoute();
  const GetP = () => {
    navigation.navigate('GetP');
  };
  const [numeroBeneficiario, setNumeroBeneficiario] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [remedio, setRemedio] = useState('');
  const [doencas, setDoencas] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await fetch('http://etec199-2021-robsondias.atwebpages.com/SW/clinicaPHP/update/update.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numeroBeneficiario,
          nome,
          telefone,
          endereco,
          remedio,
          doencas,
        }),
      });

      console.log('Status da resposta:', response.status);

      const data = await response.json();
      console.log('Resposta do servidor:', data);

      if (data.erro) {
        console.error('Erro ao atualizar paciente:', data.erro);
      } else {
        console.log('Paciente atualizado com sucesso. ID Inserido:', data.idInserido);
        setNome('');
        setTelefone('');
        setEndereco('');
        setRemedio('');
        setDoencas('');

        GetP();
      }
    } catch (error) {
      console.error('Erro ao atualizar dados do servidor:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Número do Beneficiário:</Text>
      <TextInput style={styles.input} value={numeroBeneficiario} onChangeText={setNumeroBeneficiario} />

      <Text style={styles.text}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.text}>Telefone:</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />

      <Text style={styles.text}>Endereço:</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />

      <Text style={styles.text}>Remédio:</Text>
      <TextInput style={styles.input} value={remedio} onChangeText={setRemedio} />

      <Text style={styles.text}>Doenças:</Text>
      <TextInput style={styles.input} value={doencas} onChangeText={setDoencas} />

      <Button title="Atualizar" onPress={handleUpdate} style={{borderRadius: 100}} />
    </View>
  );
};

export default PutP;
