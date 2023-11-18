import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PutP = () => {
  const [numeroBeneficiario, setNumeroBeneficiario] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [remedio, setRemedio] = useState('');
  const [doencas, setDoencas] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await fetch('http://localhost/Teste_Unitario_PHP/server/update/update.php', {
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

      const data = await response.json();
      if (data.erro) {
        console.error('Erro ao atualizar paciente:', data.erro);
      } else {
        console.log('Paciente atualizado com sucesso. ID Inserido:', data.idInserido);
        // Limpe os campos após a adição bem-sucedida, se necessário
        setNome('');
        setTelefone('');
        setEndereco('');
        setRemedio('');
        setDoencas('');
      }
    } catch (error) {
      console.error('Erro ao atualizar dados do servidor:', error);
    }
  };

  return (
    <View>
      <Text>Número do Beneficiário:</Text>
      <TextInput value={numeroBeneficiario} onChangeText={setNumeroBeneficiario} />

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

      <Button title="Atualizar" onPress={handleUpdate} />
    </View>
  );
};

export default PutP;
