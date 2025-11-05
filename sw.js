self.addEventListener("install", () => {
  caches.open("tasks").then((cache) => {
    return cache.addAll([
      "./icons/icon-192x192.png",
      "./icons/icon-512x512.png",
      "./index.html",
      "./login.html",
      "./registration.html",
      "./manifest.json",
      "./script.js",
      "./style.css",
      "./sw.js"
    ]);
  });
});
