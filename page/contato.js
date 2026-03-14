emailjs.init("dz8-ooq2e77HkHcXF");

document.getElementById("btn-enviar").addEventListener("click", ()=>{
    const nome     = document.getElementById("nome").value.trim();
    const email    = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha nome, email e mensagem");
        return;
    }

    const btn = document.getElementById("btn-enviar");
    btn.value = "Enviando...";
    btn.disabled = true;

    emailjs.send("service_2kd3joe", "template_dhdvgsx", {
        from_name: nome,
        from_email: email,
        phone: telefone,
        message: mensagem,
    })
    .then(() => {
        alert("Mensagem enviada com sucesso!!!");
        document.getElementById("nome").value     = "";
        document.getElementById("email").value    = "";
        document.getElementById("telefone").value = "";
        document.getElementById("mensagem").value = "";
    })
    .catch((error) => {
        alert("Erro ao enviar. Tente Novamente.");
        console.error(error);
    })
    .finally(() => {
        btn.value = "Enviar Mensagem";
        btn.disabled = false;
    });
});
