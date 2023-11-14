import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

// Simulação de dados do banco de dados
const dataFromDatabase = [
  {
    id: 1,
    numeroBeneficiario: '001',
    nome: 'João Silva',
    telefone: '1234567890',
    endereco: 'Rua A, 123',
    remedio: 'Medicamento X',
    doencas: 'Hipertensão',
  },
  {
    id: 2,
    numeroBeneficiario: '002',
    nome: 'Maria Santos',
    telefone: '0987654321',
    endereco: 'Rua B, 456',
    remedio: 'Medicamento Y',
    doencas: 'Diabetes',
  },
  {
    id: 3,
    numeroBeneficiario: '003',
    nome: 'Pedro Oliveira',
    telefone: '1112223333',
    endereco: 'Rua C, 789',
    remedio: 'Medicamento Z',
    doencas: 'Asma',
  },
  {
    id: 4,
    numeroBeneficiario: '004',
    nome: 'Ana Pereira',
    telefone: '4445556666',
    endereco: 'Rua D, 1011',
    remedio: 'Medicamento W',
    doencas: 'Artrite',
  },
  {
    id: 5,
    numeroBeneficiario: '005',
    nome: 'Carlos Souza',
    telefone: '7778889999',
    endereco: 'Rua E, 1213',
    remedio: 'Medicamento V',
    doencas: 'Enxaqueca',
  },
];

export default function GetP() {
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
          <View style={styles.row} key={data.id}>
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
