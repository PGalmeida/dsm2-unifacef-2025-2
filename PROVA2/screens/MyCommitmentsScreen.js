import React from 'react';
import { SectionList, Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import dados from '../data/dados'

export default function MyCommitmentsScreen() {
    const { width } = useWindowDimensions()

    const [lista] = React.useState(() => {
        return dados.filter(item => item.categoria === '(EU)')
    })

    const renderItem = React.useCallback(({ item }) => (
        <Text style={styles.item}>
            {item.horario}: {item.compromisso}
        </Text>
    ), [])

    const renderSectionHeader = React.useCallback(({ section }) => (
        <Text style={styles.header}>{section.categoria}</Text>
    ), [])

    const keyExtractor = React.useCallback((item) => item.id.toString(), [])

    const containerStyle = React.useMemo(() => {
        const isWide = width >= 600
        return [
            styles.container,
            {
                paddingHorizontal: isWide ? 24 : 12,
                paddingTop: isWide ? 20 : 12,
            }
        ]
    }, [width])

    return (
        <View style={containerStyle}>
            <Text style={styles.texto}>Pedro Gomes de Almeida - 25082</Text>
            <Text style={styles.texto}>Sistema de Informação</Text>
            <SectionList
                sections={lista}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        fontSize: 20,
        backgroundColor: '#eee',
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
    },
    texto: {
        fontSize: 14,
        fontStyle: 'normal',
        textAlign: 'center',
    },
});

