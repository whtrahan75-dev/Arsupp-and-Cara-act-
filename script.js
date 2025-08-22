function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatLog = document.getElementById("chat-log");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + input.value;
  chatLog.appendChild(userMsg);

  const reply = document.createElement("div");
  reply.textContent = "🤖: Thank you for your question! ChatGPT‑4o responses coming soon...";
  chatLog.appendChild(reply);

  chatLog.scrollTop = chatLog.scrollHeight;
  input.value = "";
}
