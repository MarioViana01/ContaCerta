
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function HomeScreen() {
  const { theme } = useTheme();

  // Valores demonstrativos. Depois poderão vir de um banco de dados.
  const saldo = 3230.30;

  const atalhos = [
    { titulo: 'Adicionar Transação', icone: 'add-circle-outline' as const, rota: '/transacoes' },
    { titulo: 'Acompanhar Transação', icone: 'stats-chart-outline' as const, rota: '/acompanhar' },
    { titulo: 'Central de Boletos', icone: 'document-text-outline' as const, rota: '/boletos' },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.miniTitle, { color: theme.textSecondary }]}>Home</Text>

      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: theme.textPrimary }]}>
            Olá, João 👋
          </Text>
          <Text style={{ color: theme.textSecondary }}>Bem-vindo ao ContaCerta</Text>
        </View>
        <Ionicons name="notifications-outline" size={25} color={theme.textPrimary} />
      </View>

      <View style={[styles.balanceCard, { backgroundColor: theme.cardBackground }]}>
        <Text style={{ color: theme.textSecondary }}>Saldo total</Text>
        <Text style={[styles.balance, { color: theme.textPrimary }]}>
          {saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Text>
        <View style={styles.balanceFooter}>
          <Ionicons name="trending-up-outline" size={19} color={theme.success} />
          <Text style={{ color: theme.success }}> Visão geral das suas finanças</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
        Contas conectadas
      </Text>
      <TouchableOpacity
        style={[styles.connectedCard, { backgroundColor: theme.primary }]}
        onPress={() => router.navigate('/acompanhar' as never)}
      >
        <Ionicons name="wallet-outline" size={30} color="#FFFFFF" />
        <View style={{ flex: 1 }}>
          <Text style={styles.connectedTitle}>Minhas contas</Text>
          <Text style={styles.connectedSubtitle}>Consulte seus lançamentos</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
        Acesso rápido
      </Text>

      {atalhos.map((item) => (
        <TouchableOpacity
          key={item.titulo}
          style={[styles.shortcut, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
          onPress={() => router.navigate(item.rota as never)}
        >
          <View style={[styles.shortcutIcon, { backgroundColor: theme.primary }]}>
            <Ionicons name={item.icone} size={22} color="#FFFFFF" />
          </View>
          <Text style={[styles.shortcutText, { color: theme.textPrimary }]}>
            {item.titulo}
          </Text>
          <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 30 },
  miniTitle: { fontSize: 12, marginBottom: 18 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 22,
  },
  greeting: { fontSize: 23, fontWeight: 'bold', marginBottom: 5 },
  balanceCard: { borderRadius: 16, padding: 20, marginBottom: 24 },
  balance: { fontSize: 30, fontWeight: 'bold', marginTop: 8 },
  balanceFooter: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', marginBottom: 12 },
  connectedCard: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    padding: 18, borderRadius: 15, marginBottom: 24,
  },
  connectedTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  connectedSubtitle: { color: '#FFFFFF', fontSize: 12, marginTop: 4 },
  shortcut: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    borderWidth: 1, borderRadius: 13, padding: 13, marginBottom: 10,
  },
  shortcutIcon: {
    width: 42, height: 42, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
  },
  shortcutText: { flex: 1, fontSize: 14, fontWeight: '600' },
});
