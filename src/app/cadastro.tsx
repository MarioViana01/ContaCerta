// src/app/cadastro.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function CadastroScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [form, setForm] = useState({ cpf: '', nome: '', nascimento: '', email: '', senha: '', confirmaSenha: '' });

  const handleCadastrar = () => {
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
      { text: 'OK', onPress: () => router.replace('/') }
    ]);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.textPrimary }]}>Cadastrar</Text>
      </View>

      {['CPF', 'Nome', 'Data de Nascimento', 'Email', 'Senha', 'Confirma Senha'].map((field, index) => {
        const key = ['cpf', 'nome', 'nascimento', 'email', 'senha', 'confirmaSenha'][index];
        const isSecure = field.includes('Senha');
        return (
          <View key={key} style={styles.inputGroup}>
            <Text style={[styles.label, { color: theme.textSecondary }]}>{field}</Text>
            <TextInput
              style={[styles.input, { backgroundColor: theme.cardBackground, color: theme.textPrimary }]}
              placeholder={`Digite seu ${field.toLowerCase()}`}
              placeholderTextColor={theme.inputPlaceholder}
              secureTextEntry={isSecure}
              value={form[key as keyof typeof form]}
              onChangeText={(text) => setForm({ ...form, [key]: text })}
            />
          </View>
        );
      })}

      <TouchableOpacity style={[styles.btnCadastrar, { backgroundColor: theme.primary }]} onPress={handleCadastrar}>
        <Text style={styles.btnText}>CADASTRAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 40, marginBottom: 20, gap: 16 },
  backBtn: { padding: 4 },
  title: { fontSize: 22, fontWeight: 'bold' },
  inputGroup: { marginBottom: 14 },
  label: { fontSize: 12, marginBottom: 4, fontWeight: '600' },
  input: { width: '100%', height: 46, borderRadius: 8, paddingHorizontal: 14, fontSize: 14 },
  btnCadastrar: { width: '100%', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginVertical: 20, marginBottom: 50 },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});