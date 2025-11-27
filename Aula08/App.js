import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  
  const [imagem, setImagem] = useState(require('./assets/avatar.png'));
  
  async function abrirCamera() {
    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
       setImagem({ uri: result.assets[0].uri });
    }
  }
  
  async function abrirGaleria() {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImagem({ uri: result.assets[0].uri });
    }
  }
  
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Perfil do usuário</Text>
      
      <Image source={imagem} style={styles.avatar} />
      
      <View style={styles.spacer}></View>
      <Button title="Tirar Foto" onPress={abrirCamera} />
      
      <View style={styles.spacer}></View>
      <Button title="Escolher da Galeria" onPress={abrirGaleria} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24
  },
  spacer: {
    marginBottom: 16
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
});
