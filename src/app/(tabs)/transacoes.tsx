
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const categorias = [
  { nome: 'Salário', icone: 'cash-outline' as const },
  { nome: 'Extras', icone: 'wallet-outline' as const },
  { nome: 'Água', icone: 'water-outline' as const },
  { nome: 'Energia', icone: 'flash-outline' as const },
  { nome: 'Internet', icone: 'wifi-outline' as const },
  { nome: 'Gás', icone: 'flame-outline' as const },
  { nome: 'Aluguel', icone: 'home-outline' as const },
  { nome: 'Combustível', icone: 'car-outline' as const },
  { nome: 'Educação', icone: 'school-outline' as const },
  { nome: 'Alimentação', icone: 'restaurant-outline' as const },
];

export default function TransacoesScreen() {
  const { theme } = useTheme();
  const [tipo, setTipo] = useState<'Receita' | 'Despesa'>('Despesa');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('Alimentação');

  // Valida o formulário. A gravação permanente será feita em uma etapa futura.
  function salvar() {
    const numero = Number(valor.replace(',', '.'));

    if (!valor.trim() || !Number.isFinite(numero) || numero <= 0) {
      Alert.alert('Valor inválido', 'Digite um valor maior que zero.');
      return;
    }

    Alert.alert(
      'Transação validada',
      `${tipo}: R$ ${numero.toFixed(2)}\nCategoria: ${categoria}\nDescrição: ${descricao || 'Não informada'}`,
    );

    // Por enquanto, os campos são limpos após a confirmação.
    setValor('');
    setDescricao('');
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}
      contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={[styles.pageTitle, { color: theme.textPrimary }]}>
        Adicionar Transação
      </Text>

      <View style={styles.typeRow}>
        {(['Receita', 'Despesa'] as const).map((item) => {
          const ativo = tipo === item;
          return (
            <TouchableOpacity
              key={item}
              onPress={() => setTipo(item)}
              style={[
                styles.typeButton,
                { backgroundColor: ativo ? theme.primary : theme.cardBackground,
                  borderColor: theme.border },
              ]}
            >
              <Ionicons
                name={item === 'Receita' ? 'add-circle-outline' : 'remove-circle-outline'}
                size={20}
                color={ativo ? '#FFFFFF' : theme.textSecondary}
              />
              <Text style={{ color: ativo ? '#FFFFFF' : theme.textPrimary, fontWeight: 'bold' }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={[styles.label, { color: theme.textPrimary }]}>Valor (R$)</Text>
      <TextInput
        value={valor}
        onChangeText={setValor}
        keyboardType="decimal-pad"
        placeholder="0,00"
        placeholderTextColor={theme.inputPlaceholder}
        style={[styles.input, { color: theme.textPrimary, backgroundColor: theme.inputBackground,
          borderColor: theme.border }]}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>Descrição</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Ex.: Compra no supermercado"
        placeholderTextColor={theme.inputPlaceholder}
        style={[styles.input, { color: theme.textPrimary, backgroundColor: theme.inputBackground,
          borderColor: theme.border }]}
      />

      <Text style={[styles.label, { color: theme.textPrimary }]}>Categoria</Text>
      <View style={styles.categories}>
        {categorias.map((item) => {
          const ativo = categoria === item.nome;
          return (
            <TouchableOpacity
              key={item.nome}
              onPress={() => setCategoria(item.nome)}
              style={[
                styles.category,
                { backgroundColor: ativo ? theme.primary : theme.cardBackground,
                  borderColor: ativo ? theme.primary : theme.border },
              ]}
            >
              <Ionicons name={item.icone} size={22} color={ativo ? '#FFFFFF' : theme.textSecondary} />
              <Text style={{ color: ativo ? '#FFFFFF' : theme.textPrimary, fontSize: 11 }}>
                {item.nome}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={[styles.saveButton, { backgroundColor: theme.primary }]} onPress={salvar}>
        <Text style={styles.saveText}>SALVAR TRANSAÇÃO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 22 },
  typeRow: { flexDirection: 'row', gap: 12, marginBottom: 22 },
  typeButton: {
    flex: 1, borderWidth: 1, borderRadius: 12, padding: 14,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
  },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  input: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 13,
    paddingVertical: 12, fontSize: 16, marginBottom: 18 },
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: 9 },
  category: {
    width: '22%', minHeight: 76, borderWidth: 1, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center', padding: 6, gap: 7,
  },
  saveButton: { marginTop: 24, borderRadius: 10, padding: 15, alignItems: 'center' },
  saveText: { color: '#FFFFFF', fontWeight: 'bold' },
});
