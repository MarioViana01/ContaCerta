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