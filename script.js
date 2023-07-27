const validEmails = [
    "email1@example.com",
    "email2@example.com",
    "email3@example.com",
    // Adicione outros e-mails válidos aqui
];

document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput").value;

    if (validEmails.includes(emailInput)) {
        // Remove o e-mail da lista após o acesso bem-sucedido
        const index = validEmails.indexOf(emailInput);
        if (index !== -1) {
            validEmails.splice(index, 1);
        }

        document.getElementById("emailForm").style.display = "none"; // Esconder o formulário após o acesso bem-sucedido
        document.getElementById("content").style.display = "block";
        // Redirecionar para o site após acertar o e-mail
        window.location.href = "https://github.com/explore"; // Coloque o link do site desejado
    } else {
        alert("E-mail incorreto! Acesso negado.");
    }
});
