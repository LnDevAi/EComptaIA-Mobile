import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getComptes } from '../api';

export default function CompteScreen({ route }) {
  const [comptes, setComptes] = useState([]);
  const [nouveauCompte, setNouveauCompte] = useState('');
  const token = route?.params?.token;
  const ajouterCompte = async () => {
    if (nouveauCompte && token) {
      await addCompte(token, { nom: nouveauCompte });
      getComptes(token).then(setComptes);
      setNouveauCompte('');
    }
  };

  useEffect(() => {
    if (token) {
      getComptes(token).then(setComptes);
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des comptes</Text>
      <FlatList
        data={comptes}
        keyExtractor={item => item.id?.toString()}
        renderItem={({ item }) => (
          <Text>{item.nom || item.code}</Text>
        )}
      />
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, marginRight: 8, padding: 8 }}
          placeholder="Nouveau compte"
          value={nouveauCompte}
          onChangeText={setNouveauCompte}
        />
        <Button title="Ajouter" onPress={ajouterCompte} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 24 },
});
