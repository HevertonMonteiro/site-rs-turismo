// Script para validação e envio do formulário de contato
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }

    // Validação de telefone (apenas números, mínimo 10 dígitos)
    const telefoneRegex = /^\d{10,11}$/;
    if (!telefoneRegex.test(telefone.replace(/\D/g, ''))) {
        alert('Por favor, insira um número de telefone válido (10 ou 11 dígitos).');
        return;
    }

    // Enviar formulário usando FormSubmit
    this.submit();

    // Após envio, exibir mensagem e limpar formulário
    setTimeout(function() {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contatoForm').reset();
    }, 1000); // Pequeno delay para garantir que o envio iniciou
});
