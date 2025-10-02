import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { register } from '../api';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      const res = await register(email, password, role);
      if (res.success) {
        Alert.alert('Inscription réussie', 'Vous pouvez vous connecter.');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erreur', res.message || 'Inscription impossible');
      }
    } catch (e) {
      Alert.alert('Erreur', 'Inscription impossible');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Rôle" value={role} onChangeText={setRole} />
      <Button title="S'inscrire" onPress={handleRegister} />
      <Button title="Retour" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 24 },
  input: { width: '80%', borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
});
