import { View, Button, StyleSheet } from 'react-native';
import { Text } from 'react-native-web';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda do dia</Text>
            <View style={{ marginBottom: 20 }}></View>
            <Text style={styles.texto}>Pedro Gomes de Almeida - 25082</Text>
            <Text style={styles.texto}>Sistema de Informação</Text>
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Meus Compromissos" onPress={() => navigation.navigate('Meus Compromissos')} />
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Compromissos da Equipe" onPress={() => navigation.navigate('Compromissos da Equipe')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 14,
        fontStyle: 'normal',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
    }
});