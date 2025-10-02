const API_URL = "https://ecomptaia-light-backend-url/api"; // Remplace par l’URL réelle Render

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function register(email, password, role) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role })
  });
  return res.json();
}
export async function getUserProfile(token) {
  const res = await fetch(`${API_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function addCompte(token, compte) {
  const res = await fetch(`${API_URL}/comptes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(compte),
  });
  return res.json();
}

export async function addEcriture(token, ecriture) {
  const res = await fetch(`${API_URL}/ecritures`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ecriture),
  });
  return res.json();
}

export async function subscribeAbonnement(token, abonnementId) {
  const res = await fetch(`${API_URL}/abonnements/${abonnementId}/subscribe`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

export async function getComptes(token) {
  const res = await fetch(`${API_URL}/comptes`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return res.json();
}

export async function getEcritures(token) {
  const res = await fetch(`${API_URL}/ecritures`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return res.json();
}


export async function getAbonnements(token) {
  const res = await fetch(`${API_URL}/abonnements`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return res.json();
}

// GED : Gestion documentaire
export async function getDocuments(token) {
  const res = await fetch(`${API_URL}/ged/documents`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function uploadDocument(token, file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${API_URL}/ged/documents`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return res.json();
}

// IA : Analyse comptable
export async function getAnalyseIA(token) {
  const res = await fetch(`${API_URL}/ia/analyse`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
