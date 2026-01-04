const WEBHOOK_URL = "https://n8n-re9macilutpq.kol.sumopod.my.id/webhook/giziku";
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("li");

const startChatBtn = document.getElementById("startChat");
const chatbotSection = document.getElementById("chatbot");

/* HAMBURGER */
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

/* SCROLL TO CHAT */
startChatBtn.addEventListener("click", () => {
  chatbotSection.scrollIntoView({ behavior: "smooth" });
});

/* CHAT */
sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = sender;
  div.innerText = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function cleanMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/^\s*[-*•]\s?/gm, "")
    .trim();
}

async function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  messageInput.value = "";

  console.log("📤 Message:", message);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    console.log("📡 Status:", response.status);

    const data = await response.json();
    console.log("📥 Response:", data);

    const reply =
      data.output ||
      data.response ||
      data.text ||
      "Tidak ada balasan dari server.";

    addMessage(cleanMarkdown(reply), "bot");

  } catch (error) {
    console.error("❌ Error:", error);
    addMessage("Server tidak merespon.", "bot");
  }
}