import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // =========================
  // LOGIN
  // =========================
  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      console.log('Preencha o e-mail e a senha.');
      return;
    }

    // TODO:
    // Aqui futuramente vamos conectar Firebase/API.
    console.log('Login:', email, senha);
  };

  // =========================
  // CADASTRO
  // =========================
  const handleCadastrar = () => {
    router.push('/cadastro');
  };

  // =========================
  // RECUPERAR SENHA
  // =========================
  const handleEsqueceuSenha = () => {
    router.push('/recuperar-senha');
  };

  // =========================
  // LOGIN GOOGLE
  // =========================
  const handleGoogle = () => {
    // TODO:
    // Implementar login com Google.
    console.log('Login com Google');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#140A26"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* =========================
            TÍTULO
        ========================= */}
        <Text style={styles.title}>
          BEM-VINDO
        </Text>

        {/* =========================
            FORMULÁRIO
        ========================= */}
        <View style={styles.form}>

          {/* E-MAIL */}
          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            placeholder="Digite seu email"
            placeholderTextColor="#777"
            returnKeyType="next"
          />

          {/* SENHA */}
          <Text style={[styles.label, styles.labelSpacing]}>
            Senha
          </Text>

          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            placeholder="Digite sua senha"
            placeholderTextColor="#777"
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />

          {/* BOTÃO ENTRAR */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.loginButtonText}>
              ENTRAR
            </Text>
          </TouchableOpacity>

          {/* =========================
              LINKS
          ========================= */}
          <View style={styles.linksRow}>

            {/* CADASTRAR */}
            <TouchableOpacity
              onPress={handleCadastrar}
              activeOpacity={0.7}
            >
              <Text style={styles.linkText}>
                Cadastrar
              </Text>
            </TouchableOpacity>

            {/* RECUPERAR SENHA */}
            <TouchableOpacity
              onPress={handleEsqueceuSenha}
              activeOpacity={0.7}
            >
              <Text style={styles.linkText}>
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* =========================
            ACESSO GOOGLE
        ========================= */}
        <View style={styles.quickAccess}>

          <Text style={styles.quickAccessText}>
            Acesso rápido com:
          </Text>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogle}
            activeOpacity={0.85}
          >
            <AntDesign
              name="google"
              size={22}
              color="#DB4437"
            />

            <Text style={styles.googleButtonText}>
              Google
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/* =========================
   ESTILOS
========================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140A26',
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 0.5,
  },

  form: {
    width: '100%',
  },

  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
  },

  labelSpacing: {
    marginTop: 16,
  },

  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#000000',
  },

  loginButton: {
    width: '100%',
    height: 44,
    marginTop: 32,
    backgroundColor: '#FF6A00',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },

  linksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  linkText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  quickAccess: {
    width: '100%',
    marginTop: 32,
    alignItems: 'center',
  },

  quickAccessText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },

  googleButton: {
    width: '100%',
    height: 44,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  googleButtonText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '800',
  },
});