import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const produtos = [
  { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
  { nome: "Smartphone", preco: 2500, categoria: "Eletrônicos" },
  { nome: "TV 50\"", preco: 3800, categoria: "Eletrônicos" },
  { nome: "Camiseta", preco: 80, categoria: "Roupas" },
  { nome: "Calça Jeans", preco: 150, categoria: "Roupas" },
  { nome: "Jaqueta", preco: 300, categoria: "Roupas" },
  { nome: "Sofá", preco: 1800, categoria: "Móveis" },
  { nome: "Mesa de Jantar", preco: 2200, categoria: "Móveis" },
  { nome: "Cadeira", preco: 350, categoria: "Móveis" },
];

function agruparPorCategoria(lista) {
  const categorias = {};

  lista.forEach((item) => {
    if (!categorias[item.categoria]) {
      categorias[item.categoria] = [];
    }
    categorias[item.categoria].push(item);
  });

  return Object.keys(categorias).map((categoria) => ({
    title: categoria,
    data: categorias[categoria],
  }));
}

export default function App() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const dadosAgrupados = agruparPorCategoria(produtosFiltrados);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Catálogo Interativo de Produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar produto..."
        value={busca}
        onChangeText={setBusca}
      />

      <SectionList
        sections={dadosAgrupados}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#e9ecef",
    padding: 8,
    borderRadius: 6,
  },
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
  },
  preco: {
    color: "gray",
  },
});
