import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAnalyseIA } from '../api';

export default function IAScreen({ route }) {
  const [analyse, setAnalyse] = useState(null);
  const token = route?.params?.token;

  useEffect(() => {
    if (token) {
      getAnalyseIA(token).then(setAnalyse);
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analyse comptable IA</Text>
      {analyse ? (
        <View>
          <Text>Score : {analyse.score}</Text>
          <Text>Conseil : {analyse.conseil}</Text>
        </View>
      ) : (
        <Text>Aucune analyse disponible</Text>
      )}
      <Button title="Rafraîchir" onPress={() => getAnalyseIA(token).then(setAnalyse)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
});
