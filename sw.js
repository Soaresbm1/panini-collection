// ============================================================
//  Service Worker — Panini 2026 Collection
//  Stratégie : cache-first pour l'app, network-first pour Firebase
// ============================================================

const CACHE_NAME = 'panini-2026-v1';

// Fichiers à mettre en cache au premier chargement (l'app elle-même)
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-16.png',
  '/icon-32.png',
  '/icon-180.png',
  '/icon-192.png',
  '/icon-512.png'
];

// Installation : on cache l'app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activation : on nettoie les anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch : stratégie selon le type de ressource
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Pour les appels Firebase / Google : on laisse passer normalement
  // (Firestore a sa propre gestion offline)
  if (
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('identitytoolkit.googleapis.com') ||
    url.hostname.includes('gstatic.com')
  ) {
    return; // bypass complet du SW pour ces requêtes
  }

  // Seulement les GET sont cachables
  if (event.request.method !== 'GET') return;

  // Stratégie cache-first pour les ressources de l'app
  event.respondWith(
    caches.match(event.request).then(cached => {
      // Si on a en cache, on renvoie + on rafraîchit en arrière-plan
      if (cached) {
        // Update silencieux du cache (stale-while-revalidate)
        fetch(event.request)
          .then(resp => {
            if (resp && resp.status === 200) {
              caches.open(CACHE_NAME).then(c => c.put(event.request, resp));
            }
          })
          .catch(() => {}); // pas grave si on est offline
        return cached;
      }

      // Pas en cache : on va sur le réseau
      return fetch(event.request)
        .then(resp => {
          // On ne cache que les réponses valides
          if (!resp || resp.status !== 200 || resp.type !== 'basic') {
            return resp;
          }
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, respClone));
          return resp;
        })
        .catch(() => {
          // Si on est offline ET pas en cache, on renvoie l'app shell pour les navigations
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
