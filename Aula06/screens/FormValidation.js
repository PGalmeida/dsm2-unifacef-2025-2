import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormValidation() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    const _erros = {}
    if (!email.includes('@')) {
      //setErro('Digite um e-mail válido');
      _erros.email = 'Digite um e-mail válido'
    }
    if (senha.length < 6) {
      _erros.senha = 'A senha deve ter no mínimo 6 caracteres'
    }
    setErros(_erros)
    // Se o objeto erros estiver vazio, é porque as validações foram bem sucedidas
    if(Object.keys(_erros).length === 0) {
      alert('Cadastro realizado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros?.email ? <Text style={styles.erro}>{erros.email} </Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros?.senha ? <Text style={styles.erro}>{erros.senha} </Text> : null}
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign:
      'center'
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding:
      10, borderRadius: 8
  },
  erro: { color: 'red', marginBottom: 10 }
});