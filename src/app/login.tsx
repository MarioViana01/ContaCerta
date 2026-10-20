// src/app/(tabs)/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { BankAccount, fetchConnectedBanks } from '../services/bankApi';
;

export default function HomeScreen() {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    setLoading(true);
    const data = await fetchConnectedBanks('user_123');
    setBankAccounts(data);
    setLoading(false);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: theme.textSecondary }]}>Olá, Joao</Text>
          <Text style={[styles.totalLabel, { color: theme.textSecondary }]}>Total</Text>
          <Text style={[styles.totalValue, { color: theme.textPrimary }]}>R$ 3.230,23</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={toggleTheme} style={styles.iconBtn}>
            <Ionicons name={isDarkMode ? 'sunny-outline' : 'moon-outline'} size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications-outline" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.cardContainer, { backgroundColor: theme.primary }]}>
        <Text style={styles.cardTitle}>Contas Conectadas</Text>
        {loading ? (
          <ActivityIndicator color="#FFF" size="small" />
        ) : (
          bankAccounts.map((account) => (
            <View key={account.id} style={styles.bankRow}>
              <Text style={styles.bankName}>{account.bankName}</Text>
              <Text style={styles.bankBalance}>R$ {account.balance.toFixed(2)}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 },
  headerActions: { flexDirection: 'row', gap: 12 },
  iconBtn: { padding: 4 },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  totalLabel: { fontSize: 14, marginTop: 10 },
  totalValue: { fontSize: 28, fontWeight: 'bold' },
  cardContainer: { borderRadius: 16, padding: 20, marginTop: 24, minHeight: 180 },
  cardTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 16 },
  bankRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  bankName: { color: '#FFF', fontSize: 14 },
  bankBalance: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
});