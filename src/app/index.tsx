
// src/app/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function LoginScreen() {
const { theme } = useTheme();
const router = useRouter();
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleLogin = () => {
  if (!email.trim() || !senha.trim()) {
    alert('Atenção'+
      'Informe seu e-mail e sua senha.');
    
    
    return;
  }
  router.replace('//./(tabs)/home');
};
 return (
 <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
<View style={styles.content}>
 <Text style={[styles.title, { color: theme.textPrimary }]}>BEM-VINDO</Text>

<Text style={[styles.label, { color: theme.textSecondary }]}>Email</Text>
<TextInput 
 style={[styles.input, { backgroundColor: theme.cardBackground, color: theme.textPrimary }]}
placeholder="Seu e-mail"
placeholderTextColor={theme.inputPlaceholder}
 value={email}
onChangeText={setEmail}
 />

 <Text style={[styles.label, { color: theme.textSecondary }]}>Senha</Text>
 <TextInput 
 style={[styles.input, { backgroundColor: theme.cardBackground, color: theme.textPrimary }]}
 placeholder="Sua senha"
 placeholderTextColor={theme.inputPlaceholder}
 secureTextEntry
 value={senha}
 onChangeText={setSenha}
 />

<TouchableOpacity style={[styles.btnEntrar, { backgroundColor: theme.primary }]} onPress={() => router.push('/(tabs)/home')}>
 <Text style={styles.btnText}>ENTRAR</Text>
</TouchableOpacity>

<View style={styles.footerLinks}>
 <TouchableOpacity onPress={() => router.push('/cadastro')}>
 <Text style={[styles.linkText, { color: theme.textSecondary }]}>Cadastrar</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => router.push('/recuperar-senha')}>
 <Text style={[styles.linkText, { color: theme.textSecondary }]}>Esqueceu a senha?</Text>
</TouchableOpacity>
</View>

 <Text style={[styles.quickAccess, { color: theme.textSecondary }]}>Acesso rápido com:</Text>
<TouchableOpacity style={[styles.googleBtn, { backgroundColor: theme.cardBackground }]}>
 <Ionicons name="logo-google" size={20} color={theme.textPrimary} />
 <Text style={[styles.googleText, { color: theme.textPrimary }]}>Google</Text>
</TouchableOpacity>
</View>
</ScrollView>
);
}

const styles = StyleSheet.create({
 container: { flex: 1, padding: 24 },
content: { marginTop: 60, alignItems: 'center' },
 title: { fontSize: 26, fontWeight: 'bold', marginBottom: 40 },
 label: { alignSelf: 'flex-start', fontSize: 14, marginBottom: 6 },
 input: { width: '100%', height: 50, borderRadius: 8, paddingHorizontal: 16, marginBottom: 16, fontSize: 14 },
 btnEntrar: { width: '100%', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20 },
 btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
 footerLinks: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
 linkText: { fontSize: 14 },
 quickAccess: { fontSize: 12, marginBottom: 12 },
 googleBtn: { width: '100%', height: 48, borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
 googleText: { fontWeight: 'bold', fontSize: 14 }
});
