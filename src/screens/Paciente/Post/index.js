import React, { useState } from 'react';
import styles from './style';
import { View, Text, Button, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';


const PostP = ({ navigation }) => {
  const routes = useRoute();
  const GetP = () => {
    navigation.navigate('GetP');
  };
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [remedio, setRemedio] = useState('');
  const [doencas, setDoencas] = useState('');

  const handleAddPaciente = async () => {
    try {
      const response = await fetch('http://etec199-2021-robsondias.atwebpages.com/SW/clinicaPHP/insert/insert.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          telefone,
          endereco,
          remedio,
          doencas,
        }),
      });

      const data = await response.json();

      if (data.erro) {
        console.error('Erro ao adicionar paciente:', data.erro);
      } else {
        console.log('Paciente adicionado com sucesso. ID Inserido:', data.idInserido);
        // Limpe os campos após a adição bem-sucedida, se necessário
        setNome('');
        setTelefone('');
        setEndereco('');
        setRemedio('');
        setDoencas('');

        GetP();
      
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação para adicionar paciente:', error);
    }
  };

  return (
    <View style={styles.container}>
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

      <Button title="Adicionar Paciente" onPress={handleAddPaciente} />
    </View>
  );
};

export default PostP;
