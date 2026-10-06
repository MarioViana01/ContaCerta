import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
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
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirma, setConfirma] = useState('');

  const handleCadastro = () => {
    // Verifica campos obrigatórios
    if (
      !cpf ||
      !nome ||
      !nascimento ||
      !email ||
      !senha ||
      !confirma
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos obrigatórios.'
      );
      return;
    }

    // Verifica se as senhas são iguais
    if (senha !== confirma) {
      Alert.alert(
        'Erro',
        'As senhas não coincidem.'
      );
      return;
    }

    // Verifica tamanho da senha
    if (senha.length < 8) {
      Alert.alert(
        'Erro',
        'A senha deve ter pelo menos 8 caracteres.'
      );
      return;
    }

    // Aqui futuramente entra Firebase ou sua API
    console.log('Cadastro:', {
      cpf,
      nome,
      nascimento,
      email,
      senha,
    });

    Alert.alert(
      'Cadastro realizado',
      'Sua conta foi criada com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => router.replace('/'),
        },
      ]
    );
  };



  const handleVoltar = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#140A26"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* CABEÇALHO */}

        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleVoltar}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            CADASTRAR
          </Text>
        </View>

        <View style={styles.form}>

          {/* CPF */}

          <Text style={styles.label}>
            CPF
          </Text>

          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="Digite seu CPF"
            placeholderTextColor="#777"
          />

          {/* NOME */}

          <Text style={[styles.label, styles.labelSpacing]}>
            Nome
          </Text>

          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words"
            placeholder="Digite seu nome"
            placeholderTextColor="#777"
          />

          {/* DATA DE NASCIMENTO */}

          <Text style={[styles.label, styles.labelSpacing]}>
            Data de Nascimento
          </Text>

          <TextInput
            style={styles.input}
            value={nascimento}
            onChangeText={setNascimento}
            keyboardType="numeric"
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#777"
          />

          {/* EMAIL */}

          <Text style={[styles.label, styles.labelSpacing]}>
            Email
          </Text>

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

          {/* CONFIRMAR SENHA */}

          <Text style={[styles.label, styles.labelSpacing]}>
            Confirmar Senha
          </Text>

          <TextInput
            style={styles.input}
            value={confirma}
            onChangeText={setConfirma}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Confirme sua senha"
            placeholderTextColor="#777"
          />

          {/* BOTÃO CADASTRAR */}

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleCadastro}
            activeOpacity={0.85}
          >
            <Text style={styles.registerButtonText}>
              CADASTRAR
            </Text>
          </TouchableOpacity>

          {/* VOLTAR PARA LOGIN */}

          <TouchableOpacity
            onPress={handleVoltar}
            activeOpacity={0.7}
          >
            <Text style={styles.backLoginText}>
              Já possui uma conta? Entrar
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


/* ESTILOS */

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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  backButton: {
    marginRight: 10,
    padding: 4,
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
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

  registerButton: {
    marginTop: 32,
    height: 44,
    backgroundColor: '#FF6A00',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },

  backLoginText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 14,
  },
});

