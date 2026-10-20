
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const lancamentos = [
  { categoria: 'Entrada', descricao: 'Salário', valor: 4252.13, data: '04/08/2026', positivo: true, icone: 'cash-outline' as const },
  { categoria: 'Custos', descricao: 'Compras do mês', valor: 1252.13, data: '04/08/2026', positivo: false, icone: 'cart-outline' as const },
  { categoria: 'Água', descricao: 'Conta de água', valor: 397.90, data: '04/08/2026', positivo: false, icone: 'water-outline' as const },
  { categoria: 'Internet', descricao: 'Plano de internet', valor: 89.90, data: '04/08/2026', positivo: false, icone: 'wifi-outline' as const },
  { categoria: 'Gás', descricao: 'Botijão de gás', valor: 110.00, data: '04/08/2026', positivo: false, icone: 'flame-outline' as const },
  { categoria: 'Combustível', descricao: 'Abastecimento', valor: 450.00, data: '04/08/2026', positivo: false, icone: 'car-outline' as const },
];

export default function AcompanharScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}
      contentContainerStyle={styles.container}>
      <Text style={[styles.pageTitle, { color: theme.textPrimary }]}>
        Acompanhar Transação
      </Text>
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        Resumo dos seus lançamentos
      </Text>

      {lancamentos.map((item, index) => (
        <View key={`${item.categoria}-${index}`}
          style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
          <View style={[styles.iconBox, { backgroundColor: theme.background }]}>
            <Ionicons name={item.icone} size={22} color={item.positivo ? theme.success : theme.primary} />
          </View>
          <View style={styles.details}>
            <Text style={[styles.category, { color: theme.textPrimary }]}>{item.categoria}</Text>
            <Text style={[styles.description, { color: theme.textSecondary }]}>{item.descricao}</Text>
            <Text style={[styles.date, { color: theme.textSecondary }]}>{item.data}</Text>
          </View>
          <View style={styles.amountBox}>
            <Text style={[styles.amount, { color: item.positivo ? theme.success : theme.textPrimary }]}>
              {item.positivo ? '+' : '-'} {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { marginTop: 7, marginBottom: 20 },
  card: {
    flexDirection: 'row', alignItems: 'center', padding: 13,
    borderRadius: 12, borderWidth: 1, marginBottom: 10, gap: 10,
  },
  iconBox: {
    width: 42, height: 42, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center',
  },
  details: { flex: 1 },
  category: { fontSize: 14, fontWeight: 'bold' },
  description: { fontSize: 12, marginTop: 3 },
  date: { fontSize: 10, marginTop: 5 },
  amountBox: { maxWidth: '43%', alignItems: 'flex-end' },
  amount: { fontSize: 12, fontWeight: 'bold' },
});
