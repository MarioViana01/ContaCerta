
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';

type Boleto = {
  id: string;
  nome: string;
  vencimento: string;
  valor: number;
  pago: boolean;
};

// Dados iniciais demonstrativos.
const boletosIniciais: Boleto[] = [
  { id: '1', nome: 'Água', vencimento: '04/11/2026', valor: 397.90, pago: false },
  { id: '2', nome: 'Internet', vencimento: '08/11/2026', valor: 89.90, pago: false },
  { id: '3', nome: 'Gás', vencimento: '10/11/2026', valor: 110.00, pago: true },
];

export default function BoletosScreen() {
  const { theme } = useTheme();
  const [boletos, setBoletos] = useState(boletosIniciais);
  const [pesquisa, setPesquisa] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [vencimento, setVencimento] = useState('');

  // Adiciona o boleto apenas à lista em memória desta tela.
  function salvarBoleto() {
    const numero = Number(valor.replace(',', '.'));

    if (!nome.trim() || !vencimento.trim() || !valor.trim() ||
        !Number.isFinite(numero) || numero <= 0) {
      Alert.alert('Confira os dados', 'Informe nome, vencimento e valor válido.');
      return;
    }

    setBoletos((atuais) => [
      ...atuais,
      {
        id: `${Date.now()}`,
        nome: nome.trim(),
        vencimento: vencimento.trim(),
        valor: numero,
        pago: false,
      },
    ]);

    setNome('');
    setValor('');
    setVencimento('');
    Alert.alert('Boleto adicionado', 'O boleto foi incluído nesta lista.');
  }

  // Filtra a lista conforme o texto digitado.
  const filtrados = boletos.filter((boleto) =>
    boleto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  function alternarPagamento(id: string) {
    setBoletos((atuais) =>
      atuais.map((boleto) =>
        boleto.id === id ? { ...boleto, pago: !boleto.pago } : boleto
      )
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.background }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={[styles.pageTitle, { color: theme.textPrimary }]}>
        Central de Boletos
      </Text>

      <Text style={[styles.label, { color: theme.textPrimary }]}>Pesquisar boleto</Text>
      <View style={[styles.searchBox, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
        <Ionicons name="search-outline" size={20} color={theme.textSecondary} />
        <TextInput
          value={pesquisa}
          onChangeText={setPesquisa}
          placeholder="Digite o nome do boleto"
          placeholderTextColor={theme.inputPlaceholder}
          style={{ flex: 1, color: theme.textPrimary, padding: 10 }}
        />
      </View>

      <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
        Cadastrar boleto
      </Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Nome (ex.: Energia)"
        placeholderTextColor={theme.inputPlaceholder}
        style={[styles.input, { color: theme.textPrimary, backgroundColor: theme.inputBackground, borderColor: theme.border }]}
      />
      <TextInput
        value={valor}
        onChangeText={setValor}
        placeholder="Valor (ex.: 150,00)"
        keyboardType="decimal-pad"
        placeholderTextColor={theme.inputPlaceholder}
        style={[styles.input, { color: theme.textPrimary, backgroundColor: theme.inputBackground, borderColor: theme.border }]}
      />
      <TextInput
        value={vencimento}
        onChangeText={setVencimento}
        placeholder="Vencimento (DD/MM/AAAA)"
        placeholderTextColor={theme.inputPlaceholder}
        style={[styles.input, { color: theme.textPrimary, backgroundColor: theme.inputBackground, borderColor: theme.border }]}
      />

      <TouchableOpacity style={[styles.saveButton, { backgroundColor: theme.primary }]} onPress={salvarBoleto}>
        <Text style={styles.saveText}>SALVAR BOLETO</Text>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
        Meus boletos
      </Text>

      {filtrados.map((boleto) => (
        <View
          key={boleto.id}
          style={[styles.boletoCard, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
        >
          <View style={[styles.iconBox, { backgroundColor: theme.background }]}>
            <Ionicons
              name="document-text-outline"
              size={23}
              color={boleto.pago ? theme.success : theme.primary}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.boletoName, { color: theme.textPrimary }]}>{boleto.nome}</Text>
            <Text style={{ color: theme.textSecondary, fontSize: 12 }}>
              Vencimento: {boleto.vencimento}
            </Text>
            <Text style={[styles.amount, { color: theme.textPrimary }]}>
              {boleto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
            <Text style={{ color: boleto.pago ? theme.success : theme.primary, fontSize: 12 }}>
              {boleto.pago ? 'Pago' : 'Pendente'}
            </Text>
          </View>

          <TouchableOpacity
            accessibilityLabel={boleto.pago ? 'Marcar como pendente' : 'Marcar como pago'}
            onPress={() => alternarPagamento(boleto.id)}
            style={[styles.statusButton, { borderColor: theme.border }]}
          >
            <Ionicons
              name={boleto.pago ? 'checkmark-circle' : 'checkmark-circle-outline'}
              size={22}
              color={boleto.pago ? theme.success : theme.textSecondary}
            />
          </TouchableOpacity>
        </View>
      ))}

      {filtrados.length === 0 && (
        <Text style={{ color: theme.textSecondary, textAlign: 'center', marginTop: 20 }}>
          Nenhum boleto encontrado.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 22 },
  label: { fontWeight: '600', marginBottom: 8 },
  searchBox: {
    flexDirection: 'row', alignItems: 'center', borderWidth: 1,
    borderRadius: 10, paddingHorizontal: 10, marginBottom: 24,
  },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', marginBottom: 12, marginTop: 5 },
  input: { borderWidth: 1, borderRadius: 10, padding: 13, marginBottom: 11 },
  saveButton: { borderRadius: 10, padding: 15, alignItems: 'center', marginBottom: 24 },
  saveText: { color: '#FFFFFF', fontWeight: 'bold' },
  boletoCard: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    borderWidth: 1, borderRadius: 12, padding: 13, marginBottom: 10,
  },
  iconBox: {
    width: 42, height: 42, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center',
  },
  boletoName: { fontSize: 15, fontWeight: 'bold', marginBottom: 4 },
  amount: { fontWeight: 'bold', marginTop: 5, marginBottom: 3 },
  statusButton: { padding: 7, borderWidth: 1, borderRadius: 10 },
});
