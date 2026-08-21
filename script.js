const MODE_LABELS = {
  todas: "Todas",
  vestuario: "Vestuario",
  conferencia: "Conferencia",
  prepartido: "Prepartido",
  derrota: "Derrota",
  victoria: "Victoria"
};

const banks = {
  todas: {
    starts: [
      "El fútbol es como",
      "Un equipo es como",
      "La presión es como",
      "El vestuario es como",
      "Un partido es como",
      "La derrota es como",
      "La victoria es como",
      "El silencio del hincha es como",
      "La pelota parada es como",
      "La ansiedad es como",
      "El carácter es como",
      "La paciencia es como"
    ],
    metaphors: [
      "un mate que hay que cebar despacio",
      "un árbol que primero necesita echar raíces",
      "un río que tarde o temprano encuentra su cauce",
      "una montaña que no se sube mirando la cima, sino el próximo paso",
      "un libro largo que no se entiende por una sola página",
      "una tormenta que te enseña a navegar",
      "un camino de tierra donde hay que saber pisar",
      "una familia sentada alrededor de la mesa",
      "un reloj viejo: si una pieza falla, se atrasa todo",
      "un asado: no se arrebata, se cocina con paciencia",
      "una partitura: si cada uno toca por su lado, suena ruido",
      "un faro: no corre, pero te orienta"
    ],
    endings: [
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
    ],
    closings: [
      "El tiempo siempre acomoda las cosas.",
      "El fútbol te devuelve lo que le das.",
      "No hay atajos para construir un equipo.",
      "Las urgencias son malas consejeras.",
      "Lo importante no es llegar primero, sino llegar preparado.",
      "La camiseta no pesa; pesa no entender lo que representa."
    ]
  },
  vestuario: {
    starts: [
      "El vestuario es como",
      "El grupo es como",
      "La confianza entre compañeros es como",
      "Una charla de vestuario es como"
    ],
    metaphors: [
      "una familia sentada alrededor de la mesa",
      "un reloj viejo: si una pieza falla, se atrasa todo",
      "una orquesta que necesita el mismo tempo",
      "un mate compartido: si uno se apura, se lava para todos"
    ],
    endings: [
      "y cuando el grupo cree, las piernas responden.",
      "porque primero se ordena la cabeza y después se suelta la pierna.",
      "y ahí es donde aparece el carácter del equipo.",
      "porque el silencio también construye."
    ],
    closings: [
      "El vestuario se cuida como se cuida la casa.",
      "Sin grupo no hay juego."
    ]
  },
  conferencia: {
    starts: [
      "La conferencia es como",
      "Responder con calma es como",
      "El mensaje al hincha es como",
      "Explicar un partido es como"
    ],
    metaphors: [
      "un libro largo que no se entiende por una sola página",
      "un río que tarde o temprano encuentra su cauce",
      "un faro: no corre, pero te orienta",
      "una tormenta que te enseña a navegar"
    ],
    endings: [
      "porque las urgencias muchas veces son malas consejeras.",
      "y el que sabe esperar, termina encontrando su momento.",
      "porque no gana el que más corre, sino el que mejor interpreta.",
      "y eso los muchachos lo entendieron muy bien."
    ],
    closings: [
      "Las palabras también forman parte del juego.",
      "Hay que hablar con la misma honestidad con la que se trabaja."
    ]
  },
  prepartido: {
    starts: [
      "El partido de mañana es como",
      "La preparación es como",
      "Salir a competir es como",
      "La concentración es como"
    ],
    metaphors: [
      "una montaña que no se sube mirando la cima, sino el próximo paso",
      "un asado: no se arrebata, se cocina con paciencia",
      "un camino de tierra donde hay que saber pisar",
      "un árbol que primero necesita echar raíces"
    ],
    endings: [
      "porque los frutos nunca aparecen antes de tiempo.",
      "si te apurás, lo terminás arruinando.",
      "porque primero se ordena la cabeza y después se suelta la pierna.",
      "y cuando el grupo cree, las piernas responden."
    ],
    closings: [
      "Lo importante no es llegar primero, sino llegar preparado.",
      "Mañana se juega con la cabeza limpia."
    ]
  },
  derrota: {
    starts: [
      "La derrota es como",
      "Perder es como",
      "Un mal resultado es como",
      "Caer y levantarse es como"
    ],
    metaphors: [
      "una tormenta que te enseña a navegar",
      "un camino de tierra donde hay que saber pisar",
      "un libro largo que no se entiende por una sola página",
      "un mate que hay que cebar despacio"
    ],
    endings: [
      "porque las urgencias muchas veces son malas consejeras.",
      "y ahí es donde aparece el carácter del equipo.",
      "porque en el fútbol, como en la vida, no hay atajos.",
      "y el que sabe esperar, termina encontrando su momento."
    ],
    closings: [
      "El tiempo siempre acomoda las cosas.",
      "De una derrota también se aprende a ganar."
    ]
  },
  victoria: {
    starts: [
      "La victoria es como",
      "Ganar es como",
      "Celebrar con humildad es como",
      "Un buen resultado es como"
    ],
    metaphors: [
      "un asado: no se arrebata, se cocina con paciencia",
      "un árbol que primero necesita echar raíces",
      "un río que tarde o temprano encuentra su cauce",
      "una familia sentada alrededor de la mesa"
    ],
    endings: [
      "porque los frutos nunca aparecen antes de tiempo.",
      "y cuando el grupo cree, las piernas responden.",
      "porque no gana el que más corre, sino el que mejor interpreta.",
      "y eso los muchachos lo entendieron muy bien."
    ],
    closings: [
      "El fútbol te devuelve lo que le das.",
      "Ganar también obliga a seguir trabajando."
    ]
  }
};

const DAILY_QUOTES = [
  "El fútbol es como un mate que hay que cebar despacio; si te apurás, lo terminás lavando.",
  "Un equipo es como un árbol que primero necesita echar raíces; porque los frutos nunca aparecen antes de tiempo.",
  "La presión es como una montaña que no se sube mirando la cima, sino el próximo paso.",
  "El vestuario es como una familia sentada alrededor de la mesa; y cuando el grupo cree, las piernas responden.",
  "La derrota es como una tormenta que te enseña a navegar; y ahí es donde aparece el carácter del equipo.",
  "La victoria es como un asado: no se arrebata, se cocina con paciencia. El fútbol te devuelve lo que le das.",
  "La pelota parada es como un reloj viejo: si una pieza falla, se atrasa todo.",
  "La ansiedad es como un camino de tierra donde hay que saber pisar; porque las urgencias muchas veces son malas consejeras.",
  "El carácter es como un faro: no corre, pero te orienta. No hay atajos para construir un equipo.",
  "Un partido es como un libro largo que no se entiende por una sola página; y el que sabe esperar, termina encontrando su momento."
];

const HISTORY_LIMIT = 12;
const RECENT_AVOID = 5;

const quoteText = document.getElementById("quoteText");
const quoteBox = document.getElementById("quoteBox");
const coachStage = document.querySelector(".coach-stage");
const favoritesPanel = document.getElementById("favoritesPanel");
const historyPanel = document.getElementById("historyPanel");
const favoritesList = document.getElementById("favoritesList");
const historyList = document.getElementById("historyList");
const statsLine = document.getElementById("statsLine");
const toast = document.getElementById("toast");
const favoriteButton = document.getElementById("favoriteQuote");

let currentMode = "todas";
let currentQuote = quoteText.textContent.trim();
let favorites = loadJson("alfaroFavorites", []);
let history = loadJson("alfaroHistory", []);
let generatedCount = loadNumber("alfaroGeneratedCount", 0);

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function loadNumber(key, fallback) {
  try {
    const value = Number(localStorage.getItem(key));
    return Number.isFinite(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function dayIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  return Math.floor(diff / 86400000);
}

function buildQuote(mode = currentMode) {
  const bank = banks[mode] || banks.todas;
  const base = `${randomFrom(bank.starts)} ${randomFrom(bank.metaphors)}; ${randomFrom(bank.endings)}`;
  const addClosing = Math.random() > 0.55;
  return addClosing ? `${base} ${randomFrom(bank.closings)}` : base;
}

function updateFavoriteLabel() {
  const liked = favorites.includes(currentQuote);
  favoriteButton.textContent = liked ? "♥ Favorita" : "♡ Favorita";
  favoriteButton.setAttribute("aria-pressed", liked ? "true" : "false");
}

function updateStats() {
  const modeLabel = MODE_LABELS[currentMode] || "Todas";
  statsLine.textContent = `Frases generadas: ${generatedCount} · Modo: ${modeLabel}`;
}

function animateQuote() {
  quoteBox.classList.remove("swap");
  coachStage.classList.remove("react");
  // Force reflow so animation can replay.
  void quoteBox.offsetWidth;
  quoteBox.classList.add("swap");
  coachStage.classList.add("react");
  window.setTimeout(() => coachStage.classList.remove("react"), 380);
}

function setQuote(quote, { count = false, pushHistory = true, syncUrl = true, animate = true } = {}) {
  currentQuote = quote.trim();
  quoteText.textContent = currentQuote;
  if (animate) animateQuote();
  updateFavoriteLabel();

  if (count) {
    generatedCount += 1;
    try {
      localStorage.setItem("alfaroGeneratedCount", String(generatedCount));
    } catch {
      // Ignore storage errors.
    }
  }

  if (pushHistory) {
    history = [currentQuote, ...history.filter(item => item !== currentQuote)].slice(0, HISTORY_LIMIT);
    saveJson("alfaroHistory", history);
    renderHistory();
  }

  if (syncUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("frase", currentQuote);
    window.history.replaceState({}, "", url);
  }

  updateStats();
}

function generateQuote() {
  let next = buildQuote(currentMode);
  let guard = 0;
  const recent = new Set(history.slice(0, RECENT_AVOID));
  while (recent.has(next) && guard < 20) {
    next = buildQuote(currentMode);
    guard += 1;
  }
  setQuote(next, { count: true });
}

function showDailyQuote() {
  const quote = DAILY_QUOTES[dayIndex() % DAILY_QUOTES.length];
  setQuote(quote, { count: true });
  showToast("Frase del día");
}

function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  area.setSelectionRange(0, text.length);

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }

  document.body.removeChild(area);
  return ok;
}

async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      showToast(successMessage);
      return true;
    }
  } catch {
    // Fall through.
  }

  if (fallbackCopy(text)) {
    showToast(successMessage);
    return true;
  }

  showToast("No se pudo copiar");
  return false;
}

async function copyQuote() {
  await copyText(currentQuote, "Frase copiada");
}

function shareUrlFor(quote) {
  const url = new URL(window.location.href);
  url.searchParams.set("frase", quote);
  return url.toString();
}

async function shareQuote() {
  const shareData = {
    title: "Frase del Técnico Alfaro",
    text: currentQuote,
    url: shareUrlFor(currentQuote)
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  await copyText(`${currentQuote}\n\n${shareData.url}`, "Copiada para compartir");
}

function speakQuote() {
  if (!("speechSynthesis" in window)) {
    showToast("Tu navegador no soporta audio");
    return;
  }

  window.speechSynthesis.cancel();
  window.setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(currentQuote);
    utterance.lang = "es-AR";
    utterance.rate = 0.88;
    utterance.pitch = 0.88;
    window.speechSynthesis.speak(utterance);
  }, 50);
}

function toggleFavorite() {
  if (favorites.includes(currentQuote)) {
    favorites = favorites.filter(item => item !== currentQuote);
    showToast("Quitada de favoritas");
  } else {
    favorites.unshift(currentQuote);
    showToast("Guardada en favoritas");
  }
  saveJson("alfaroFavorites", favorites);
  renderFavorites();
  updateFavoriteLabel();
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
    const button = document.createElement("button");
    button.type = "button";
    button.className = "history-item";
    button.textContent = quote;
    button.addEventListener("click", () => {
      setQuote(quote, { pushHistory: true, count: false });
      setTab("quote");
      showToast("Frase restaurada");
    });
    li.appendChild(button);
    favoritesList.appendChild(li);
  });
}

function renderHistory() {
  historyList.innerHTML = "";
  if (!history.length) {
    const empty = document.createElement("li");
    empty.textContent = "Todavía no generaste frases.";
    historyList.appendChild(empty);
    return;
  }

  history.forEach(quote => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "history-item";
    button.textContent = quote;
    button.addEventListener("click", () => {
      setQuote(quote, { pushHistory: false, count: false });
      setTab("quote");
      showToast("Frase del historial");
    });
    li.appendChild(button);
    historyList.appendChild(li);
  });
}

function clearFavorites() {
  favorites = [];
  try {
    localStorage.removeItem("alfaroFavorites");
  } catch {
    // Ignore.
  }
  renderFavorites();
  updateFavoriteLabel();
  showToast("Favoritas borradas");
}

async function exportFavorites() {
  if (!favorites.length) {
    showToast("No hay favoritas");
    return;
  }
  const text = favorites.map((quote, index) => `${index + 1}. ${quote}`).join("\n\n");
  await copyText(text, "Favoritas exportadas");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast._timer);
  showToast._timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function setMode(mode) {
  currentMode = banks[mode] ? mode : "todas";
  document.querySelectorAll(".mode").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === currentMode);
  });
  updateStats();
}

function setTab(tabName) {
  document.querySelectorAll(".tab").forEach(tab => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });

  favoritesPanel.classList.toggle("open", tabName === "favorites");
  historyPanel.classList.toggle("open", tabName === "history");

  if (tabName === "favorites") {
    favoritesPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else if (tabName === "history") {
    historyPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else if (tabName === "info") {
    document.getElementById("infoCard").scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("Safari → Agregar a pantalla de inicio");
  } else {
    quoteBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function readQuoteFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("frase");
  return fromUrl && fromUrl.trim() ? fromUrl.trim() : null;
}

document.getElementById("newQuote").addEventListener("click", generateQuote);
document.getElementById("dailyQuote").addEventListener("click", showDailyQuote);
document.getElementById("copyQuote").addEventListener("click", copyQuote);
document.getElementById("shareQuote").addEventListener("click", shareQuote);
document.getElementById("speakQuote").addEventListener("click", speakQuote);
favoriteButton.addEventListener("click", toggleFavorite);
document.getElementById("clearFavorites").addEventListener("click", clearFavorites);
document.getElementById("exportFavorites").addEventListener("click", exportFavorites);

document.querySelectorAll(".mode").forEach(button => {
  button.addEventListener("click", () => {
    setMode(button.dataset.mode);
    generateQuote();
  });
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.setAttribute("aria-selected", tab.classList.contains("active") ? "true" : "false");
  tab.addEventListener("click", () => setTab(tab.dataset.tab));
});

window.addEventListener("pagehide", () => {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
});

renderFavorites();
renderHistory();
updateStats();

const sharedQuote = readQuoteFromUrl();
if (sharedQuote) {
  setQuote(sharedQuote, { count: false, pushHistory: true, syncUrl: true, animate: false });
} else {
  updateFavoriteLabel();
}
