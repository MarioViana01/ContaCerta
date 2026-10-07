import { Ionicons } from '@expo/vector-icons';
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

export default function RecuperarSenhaScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');

  function enviarLink() {
    if (!email.trim()) {
      Alert.alert(
        'Atenção',
        'Digite seu e-mail para receber o link de redefinição de senha.'
      );
      return;
    }

    Alert.alert(
      'Link enviado',
      `Se o e-mail ${email} estiver cadastrado, você receberá um link para redefinir sua senha.`
    );
  }

  function voltarLogin() {
    router.back();
  }

  return (
    <View style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#100820"
      />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          {/* CABEÇALHO */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={voltarLogin}
              activeOpacity={0.7}
            >
              <Ionicons
                name="arrow-back"
                size={25}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <Text style={styles.title}>
              Recuperar Senha
            </Text>
          </View>

          {/* CONTEÚDO */}
          <View style={styles.content}>

            <Text style={styles.description}>
              Digite seu e-mail para{'\n'}
              receber o link de redefinição{'\n'}
              de senha
            </Text>

            {/* E-MAIL */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                E-mail
              </Text>

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder=""
                placeholderTextColor="#777"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* BOTÃO */}
            <TouchableOpacity
              style={styles.button}
              onPress={enviarLink}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>
                ENVIAR LINK
              </Text>
            </TouchableOpacity>

            {/* VOLTAR */}
            <TouchableOpacity
              onPress={voltarLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.loginText}>
                Voltar para o login
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#100820',
  },

  container: {
    flex: 1,
    backgroundColor: '#100820',
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 6,
  },

  // -------------------------
  // CABEÇALHO
  // -------------------------

  header: {
    height: 185,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 2,
  },

  // -------------------------
  // CONTEÚDO
  // -------------------------

  content: {
    flex: 1,
    paddingTop: 47,
  },

  description: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 27,
  },

  // -------------------------
  // CAMPO E-MAIL
  // -------------------------

  inputContainer: {
    width: '100%',
    marginBottom: 59,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
    marginLeft: 2,
  },

  input: {
    width: '100%',
    height: 36,
    backgroundColor: '#1C252D',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    fontSize: 14,
  },

  // -------------------------
  // BOTÃO
  // -------------------------

  button: {
    width: '100%',
    height: 28,
    backgroundColor: '#FF6900',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  // -------------------------
  // VOLTAR PARA LOGIN
  // -------------------------

  loginText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
});