import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function GetP() {
  const [dataFromDatabase, setDataFromDatabase] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('http://etec199-2021-robsondias.atwebpages.com/SW/clinicaPHP/select/selectPaciente.php', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const data = await response.json();
        console.log(data);

        setDataFromDatabase(data);
      } catch (error) {
        console.error('Erro ao obter dados do servidor:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Nº Beneficiário</Text>
          <Text style={[styles.cell, styles.header]}>Nome</Text>
          <Text style={[styles.cell, styles.header]}>Telefone</Text>
          <Text style={[styles.cell, styles.header]}>Endereço</Text>
          <Text style={[styles.cell, styles.header]}>Remédio de Uso Contínuo</Text>
          <Text style={[styles.cell, styles.header]}>Doenças Prévias</Text>
        </View>
        {dataFromDatabase.map((data) => (
          <View style={styles.row} key={data.numeroBeneficiario}>
            <Text style={styles.cell}>{data.numeroBeneficiario}</Text>
            <Text style={styles.cell}>{data.nome}</Text>
            <Text style={styles.cell}>{data.telefone}</Text>
            <Text style={styles.cell}>{data.endereco}</Text>
            <Text style={styles.cell}>{data.remedio}</Text>
            <Text style={styles.cell}>{data.doencas}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

