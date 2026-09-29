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

export default function CadastroScreen() {
  const router = useRouter();

  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    console.log({
      cpf,
      nome,
      dataNascimento,
      email,
      senha,
    });

    // Depois podemos colocar aqui o cadastro no Firebase/API.
  };

  const handleVoltar = () => {
    router.back();
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
        <Text style={styles.title}>
          CRIE SUA CONTA
        </Text>

        <View style={styles.form}>

          {/* CPF */}
          <Text style={styles.label}>CPF</Text>

          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
            placeholder="Digite seu CPF"
            placeholderTextColor="#777"
            maxLength={11}
          />

          {/* NOME */}
          <Text style={styles.label}>
            Nome completo
          </Text>

          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#777"
            autoCapitalize="words"
          />

          {/* DATA DE NASCIMENTO */}
          <Text style={styles.label}>
            Data de nascimento
          </Text>

          <TextInput
            style={styles.input}
            value={dataNascimento}
            onChangeText={setDataNascimento}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#777"
            keyboardType="numeric"
            maxLength={10}
          />

          {/* EMAIL */}
          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            placeholderTextColor="#777"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* SENHA */}
          <Text style={styles.label}>
            Senha
          </Text>

          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Crie uma senha"
            placeholderTextColor="#777"
            secureTextEntry
            autoCapitalize="none"
          />

          {/* BOTÃO CADASTRAR */}
          <TouchableOpacity
            style={styles.cadastroButton}
            onPress={handleCadastro}
            activeOpacity={0.85}
          >
            <Text style={styles.cadastroButtonText}>
              CADASTRAR
            </Text>
          </TouchableOpacity>

          {/* VOLTAR */}
          <TouchableOpacity
            style={styles.voltarButton}
            onPress={handleVoltar}
            activeOpacity={0.7}
          >
            <Text style={styles.voltarText}>
              Voltar para o login
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

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
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 30,
  },

  form: {
    width: '100%',
  },

  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
    marginTop: 14,
  },

  input: {
    height: 44,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#000000',
  },

  cadastroButton: {
    marginTop: 30,
    height: 44,
    backgroundColor: '#FF6A00',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cadastroButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },

  voltarButton: {
    alignItems: 'center',
    marginTop: 18,
  },

  voltarText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});