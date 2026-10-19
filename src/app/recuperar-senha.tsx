// src/app/recuperar-senha.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function RecuperarSenhaScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleEnviarLink = () => {
    Alert.alert('Link Enviado', 'Verifique sua caixa de entrada para redefinir a senha.', [
      { text: 'Voltar ao Login', onPress: () => router.replace('/') }
    ]);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.textPrimary }]}>Recuperar Senha</Text>
      </View>

      <Text style={[styles.instruction, { color: theme.textSecondary }]}>
        Digite seu e-mail para receber o link de definição de senha
      </Text>

      <Text style={[styles.label, { color: theme.textSecondary }]}>E-mail</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.cardBackground, color: theme.textPrimary }]}
        placeholder="Seu e-mail cadastrado"
        placeholderTextColor={theme.inputPlaceholder}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={[styles.btnEnviar, { backgroundColor: theme.primary }]} onPress={handleEnviarLink}>
        <Text style={styles.btnText}>ENVIAR LINK</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace('/')} style={styles.backLogin}>
        <Text style={[styles.backLoginText, { color: theme.textSecondary }]}>Voltar para o login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 40, marginBottom: 20, gap: 16 },
  backBtn: { padding: 4 },
  title: { fontSize: 22, fontWeight: 'bold' },
  instruction: { fontSize: 14, marginBottom: 24, textAlign: 'center' },
  label: { fontSize: 12, marginBottom: 4, fontWeight: '600' },
  input: { width: '100%', height: 48, borderRadius: 8, paddingHorizontal: 14, marginBottom: 20, fontSize: 14 },
  btnEnviar: { width: '100%', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  backLogin: { alignItems: 'center', marginTop: 10 },
  backLoginText: { fontSize: 14, fontWeight: '500' }
});