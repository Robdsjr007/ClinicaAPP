import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const PostP = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [remedio, setRemedio] = useState('');
  const [doencas, setDoencas] = useState('');

  const handleAddPaciente = async () => {
    try {
      const response = await fetch('http://localhost/Teste_Unitario_PHP/server/insert/insert.php', {
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
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação para adicionar paciente:', error);
    }
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} />

      <Text>Telefone:</Text>
      <TextInput value={telefone} onChangeText={setTelefone} />

      <Text>Endereço:</Text>
      <TextInput value={endereco} onChangeText={setEndereco} />

      <Text>Remédio:</Text>
      <TextInput value={remedio} onChangeText={setRemedio} />

      <Text>Doenças:</Text>
      <TextInput value={doencas} onChangeText={setDoencas} />

      <Button title="Adicionar Paciente" onPress={handleAddPaciente} />
    </View>
  );
};

export default PostP;
