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

  const handleLogin = () => {
    // TODO: chamar sua API / Firebase aqui
    console.log('Login:', email, senha);
  };

  const handleCadastrar = () => {
       router.push('/cadastro');
  };

  const handleEsqueceuSenha = () => {
    // Quando criar a tela de recuperação:
    // router.push('/esqueceu a senha?');

    console.log('Esqueceu a senha?');
  };

  const handleGoogle = () => {
    // TODO: login com Google
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
      >
        <Text style={styles.title}>BEM-VINDO</Text>

        <View style={styles.form}>
          {/* EMAIL */}
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            placeholderTextColor="#777"
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
            placeholder="Digite sua senha"
            placeholderTextColor="#777"
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

          {/* LINKS */}
          <View style={styles.linksRow}>
            <TouchableOpacity
              onPress={handleCadastrar}
              activeOpacity={0.7}
            >
              <Text style={styles.linkText}>
                Cadastrar
              </Text>
            </TouchableOpacity>

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

        {/* ACESSO GOOGLE */}
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




/*css*/
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
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#000000',
  },

  loginButton: {
    marginTop: 32,
    height: 44,
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