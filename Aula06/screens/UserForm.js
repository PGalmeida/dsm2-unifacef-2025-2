import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function UserForm({navigation}) {
  /*
    DICA: pesquise como usar useReducer para diminuir a quantidade
    de variáveis de estado
  */
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [telefone, setTelefone] = useState('')
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    const _erros = {}

    if(nome.trim().length < 5) {
      _erros.nome = 'O nome completo deve ter, no mínimo, 5 caracteres'
    }
    else if (!nome.trim().includes(' ')) {
      _erros.nome = 'O nome completo deve ter, no mínimo, duas palavras'
    }

    if (!email.includes('@')) {
      //setErro('Digite um e-mail válido');
      _erros.email = 'Digite um e-mail válido'
    }

    if (senha.length < 6) {
      _erros.senha = 'A senha deve ter no mínimo 6 caracteres'
    }

    if(confSenha !== senha) {
      _erros.confSenha = 'A confirmação da senha deve ser igual à senha'
    }

    if(telefone.trim() === '') {
      _erros.telefone = 'O número de telefone deve ser preenchido'
    }
    else if(telefone.trim().length < 7) {
      _erros.telefone = 'O número de telefone deve ter, pelo menos, 7 dígitos'
    }

    setErros(_erros)
    // Se o objeto erros estiver vazio, é porque as validações foram bem sucedidas
    if(Object.keys(_erros).length === 0) {
      navigation.navigate("Detalhes do Usuário", {
        nome, email, telefone
      })
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros?.nome ? <Text style={styles.erro}>{erros.nome} </Text> : null}

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

      <TextInput
        style={styles.input}
        placeholder="Confirme a senha"
        secureTextEntry
        value={confSenha}
        onChangeText={setConfSenha}
      />
      {erros?.confSenha ? <Text style={styles.erro}>{erros.confSenha} </Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        autoCapitalize="none"
        value={telefone}
        onChangeText={setTelefone}
      />
      {erros?.telefone ? <Text style={styles.erro}>{erros.telefone} </Text> : null}

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