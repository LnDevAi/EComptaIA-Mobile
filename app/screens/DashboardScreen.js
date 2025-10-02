import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getUserProfile } from '../api';

export default function DashboardScreen({ navigation }) {
  // Récupérer le token transmis depuis LoginScreen
  const token = route?.params?.token;
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (token) {
      getUserProfile(token).then(setProfile);
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur le tableau de bord</Text>
      {profile && (
        <View style={{ marginBottom: 16 }}>
          <Text>Utilisateur : {profile.nom || profile.email}</Text>
          <Text>Rôle : {profile.role}</Text>
        </View>
      )}
  <Button title="Comptes" onPress={() => navigation.navigate('Comptes', { token })} />
  <Button title="Écritures" onPress={() => navigation.navigate('Ecritures', { token })} />
  <Button title="Abonnement" onPress={() => navigation.navigate('Abonnement', { token })} />
  <Button title="GED" onPress={() => navigation.navigate('GED', { token })} />
  <Button title="IA" onPress={() => navigation.navigate('IA', { token })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, marginBottom: 24 },
});
