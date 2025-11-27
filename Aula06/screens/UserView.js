import {Text, View, StyleSheet} from 'react-native'

export default function UserView({ route }) {
  const {nome, email, telefone} = route.params
  return <>
    <View style={styles.container}>
      <View>
        <Text><Text style={styles.bold}>Nome:</Text> {nome}</Text>
      </View>
      <View>
        <Text><Text style={styles.bold}>E-mail:</Text> {email}</Text>
      </View>
      <View>
        <Text><Text style={styles.bold}>Telefone:</Text> {telefone}</Text>
      </View>
    </View>
  </>
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  bold: { fontWeight: 'bold' }
});