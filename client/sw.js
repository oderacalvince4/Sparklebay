// Service worker for the customer app only (its own scope, its own cache).
const CACHE = 'sparkle-bay-client-v2';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['../icons/icon-192.png'])).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request).then(r => r || new Response('You are offline. Reconnect and reopen the app.', { status: 503, headers: { 'Content-Type': 'text/plain' } }))));
});
