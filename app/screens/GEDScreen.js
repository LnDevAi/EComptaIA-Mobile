import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { getDocuments, uploadDocument } from '../api';
import * as DocumentPicker from 'expo-document-picker';

export default function GEDScreen({ route }) {
  const [documents, setDocuments] = useState([]);
  const token = route?.params?.token;

  useEffect(() => {
    if (token) {
      getDocuments(token).then(setDocuments);
    }
  }, [token]);

  const handleUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success' && token) {
      await uploadDocument(token, result);
      getDocuments(token).then(setDocuments);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion documentaire (GED)</Text>
      <FlatList
        data={documents}
        keyExtractor={item => item.id?.toString()}
        renderItem={({ item }) => (
          <Text>{item.nom || item.filename}</Text>
        )}
      />
      <Button title="Ajouter un document" onPress={handleUpload} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
});
