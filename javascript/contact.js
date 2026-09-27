(function initContactForm() {
  var form = document.getElementById("profile-contact-form");
  var note = document.getElementById("profile-note");
  var label = document.getElementById("profile-send-label");
  var submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  if (!form || !note) return;

  var SERVICE_ID = "service_2kd3joe";
  var TEMPLATE_ID = "template_dhdvgsx";
  var PUBLIC_KEY = "dz8-ooq2e77HkHcXF";

  function showNote(type, text) {
    note.textContent = text;
    note.className = "profile-note profile-note-" + type;
    // reinicia a animação de entrada
    note.style.animation = "none";
    void note.offsetWidth;
    note.style.animation = "";
    note.classList.add("shown");
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    var nome = form.nome.value;
    var email = form.email.value;
    var telefone = form.telefone.value;
    var mensagem = form.mensagem.value;

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      showNote("error", "Por favor, preencha os campos de nome, email e mensagem.");
      return;
    }

    submitBtn.disabled = true;
    label.textContent = "Enviando...";
    note.className = "profile-note";

    try {
      var res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: nome,
            from_email: email,
            phone: telefone,
            message: mensagem,
          },
        }),
      });

      if (!res.ok) throw new Error(" falha no envio");

      form.reset();
      showNote("success", "Mensagem enviada com sucesso!");
    } catch (err) {
      showNote("error", "Erro ao enviar. Tente Novamente.");
    } finally {
      submitBtn.disabled = false;
      label.textContent = "Enviar Mensagem";
    }
  });
})();
