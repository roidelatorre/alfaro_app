const starts = [
  "El fútbol es como",
  "Un equipo es como",
  "La presión es como",
  "El vestuario es como",
  "Un partido es como",
  "La derrota es como",
  "La victoria es como",
  "El silencio del hincha es como",
  "La pelota parada es como",
  "La ansiedad es como"
];

const metaphors = [
  "un mate que hay que cebar despacio",
  "un árbol que primero necesita echar raíces",
  "un río que tarde o temprano encuentra su cauce",
  "una montaña que no se sube mirando la cima, sino el próximo paso",
  "un libro largo que no se entiende por una sola página",
  "una tormenta que te enseña a navegar",
  "un camino de tierra donde hay que saber pisar",
  "una familia sentada alrededor de la mesa",
  "un reloj viejo: si una pieza falla, se atrasa todo",
  "un asado: no se arrebata, se cocina con paciencia"
];

const endings = [
  "si te apurás, lo terminás arruinando.",
  "porque los frutos nunca aparecen antes de tiempo.",
  "y el que sabe esperar, termina encontrando su momento.",
  "porque no gana el que más corre, sino el que mejor interpreta.",
  "y eso los muchachos lo entendieron muy bien.",
  "porque en el fútbol, como en la vida, no hay atajos.",
  "y cuando el grupo cree, las piernas responden.",
  "porque las urgencias muchas veces son malas consejeras.",
  "y ahí es donde aparece el carácter del equipo.",
  "porque primero se ordena la cabeza y después se suelta la pierna."
];

const premiumClosings = [
  "El tiempo siempre acomoda las cosas.",
  "El fútbol te devuelve lo que le das.",
  "No hay atajos para construir un equipo.",
  "Las urgencias son malas consejeras.",
  "Lo importante no es llegar primero, sino llegar preparado.",
  "La camiseta no pesa; pesa no entender lo que representa."
];

const quoteText = document.getElementById("quoteText");
const favoritesPanel = document.getElementById("favoritesPanel");
const favoritesList = document.getElementById("favoritesList");
const toast = document.getElementById("toast");

let currentQuote = quoteText.textContent;
let favorites = JSON.parse(localStorage.getItem("alfaroFavorites") || "[]");

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateQuote() {
  const base = `${randomFrom(starts)} ${randomFrom(metaphors)}; ${randomFrom(endings)}`;
  const addClosing = Math.random() > 0.55;
  currentQuote = addClosing ? `${base} ${randomFrom(premiumClosings)}` : base;
  quoteText.textContent = currentQuote;
  document.getElementById("favoriteQuote").textContent = favorites.includes(currentQuote) ? "♥ Favorita" : "♡ Favorita";
}

async function copyQuote() {
  try {
    await navigator.clipboard.writeText(currentQuote);
    showToast("Frase copiada");
  } catch {
    showToast("No se pudo copiar");
  }
}

async function shareQuote() {
  const shareData = {
    title: "Frase del Técnico Alfaro",
    text: currentQuote
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      // User cancelled share; no message needed.
    }
  } else {
    await copyQuote();
    showToast("Copiada para compartir");
  }
}

function speakQuote() {
  if (!("speechSynthesis" in window)) {
    showToast("Tu navegador no soporta audio");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(currentQuote);
  utterance.lang = "es-AR";
  utterance.rate = 0.88;
  utterance.pitch = 0.88;
  window.speechSynthesis.speak(utterance);
}

function toggleFavorite() {
  if (favorites.includes(currentQuote)) {
    favorites = favorites.filter(item => item !== currentQuote);
    showToast("Quitada de favoritas");
  } else {
    favorites.unshift(currentQuote);
    showToast("Guardada en favoritas");
  }
  localStorage.setItem("alfaroFavorites", JSON.stringify(favorites));
  renderFavorites();
  document.getElementById("favoriteQuote").textContent = favorites.includes(currentQuote) ? "♥ Favorita" : "♡ Favorita";
}

function renderFavorites() {
  favoritesList.innerHTML = "";
  if (!favorites.length) {
    const empty = document.createElement("li");
    empty.textContent = "Todavía no guardaste frases.";
    favoritesList.appendChild(empty);
    return;
  }

  favorites.forEach(quote => {
    const li = document.createElement("li");
    li.textContent = quote;
    favoritesList.appendChild(li);
  });
}

function clearFavorites() {
  favorites = [];
  localStorage.removeItem("alfaroFavorites");
  renderFavorites();
  document.getElementById("favoriteQuote").textContent = "♡ Favorita";
  showToast("Favoritas borradas");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function setTab(tabName) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  if (tabName === "favorites") {
    favoritesPanel.classList.add("open");
    favoritesPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else if (tabName === "info") {
    favoritesPanel.classList.remove("open");
    document.querySelector(".info-card").scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("App 100% HTML, CSS y JS");
  } else {
    favoritesPanel.classList.remove("open");
  }
}

document.getElementById("newQuote").addEventListener("click", generateQuote);
document.getElementById("copyQuote").addEventListener("click", copyQuote);
document.getElementById("shareQuote").addEventListener("click", shareQuote);
document.getElementById("speakQuote").addEventListener("click", speakQuote);
document.getElementById("favoriteQuote").addEventListener("click", toggleFavorite);
document.getElementById("clearFavorites").addEventListener("click", clearFavorites);
document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => setTab(tab.dataset.tab)));

renderFavorites();
