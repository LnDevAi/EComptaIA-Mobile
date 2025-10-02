import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AbonnementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des abonnements</Text>
      {/* TODO: Afficher les offres et l’état d’abonnement depuis l’API */}
    </View>
  );
}
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getAbonnements } from '../api';
export default function AbonnementScreen({ route }) {
  const [abonnements, setAbonnements] = useState([]);
  const token = route?.params?.token;
  const souscrire = async (id) => {
    if (token) {
      await subscribeAbonnement(token, id);
      getAbonnements(token).then(setAbonnements);
    }
  };

  useEffect(() => {
    if (token) {
      getAbonnements(token).then(setAbonnements);
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des abonnements</Text>
      <FlatList
        data={abonnements}
        keyExtractor={item => item.id?.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ flex: 1 }}>{item.nom || item.type}</Text>
            <Button title="Souscrire" onPress={() => souscrire(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 24 },
});
