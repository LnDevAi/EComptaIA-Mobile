import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getEcritures } from '../api';

export default function EcritureScreen({ route }) {
  const [ecritures, setEcritures] = useState([]);
  const [libelle, setLibelle] = useState('');
  const [montant, setMontant] = useState('');
  const token = route?.params?.token;
  const ajouterEcriture = async () => {
    if (libelle && montant && token) {
      await addEcriture(token, { libelle, montant });
      getEcritures(token).then(setEcritures);
      setLibelle('');
      setMontant('');
    }
  };

  useEffect(() => {
    if (token) {
      getEcritures(token).then(setEcritures);
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des écritures</Text>
      <FlatList
        data={ecritures}
        keyExtractor={item => item.id?.toString()}
        renderItem={({ item }) => (
          <Text>{item.libelle || item.montant}</Text>
        )}
      />
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, marginRight: 8, padding: 8 }}
          placeholder="Libellé"
          value={libelle}
          onChangeText={setLibelle}
        />
        <TextInput
          style={{ flex: 1, borderWidth: 1, marginRight: 8, padding: 8 }}
          placeholder="Montant"
          value={montant}
          onChangeText={setMontant}
          keyboardType="numeric"
        />
        <Button title="Ajouter" onPress={ajouterEcriture} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 24 },
});
