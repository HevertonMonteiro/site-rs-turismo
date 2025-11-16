// Script para validação e envio do formulário de contato usando Web3Forms
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

    // Preparar dados para Web3Forms
    const formData = new FormData();
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Substitua pela sua chave do Web3Forms
    formData.append('name', nome);
    formData.append('email', email);
    formData.append('telefone', telefone);
    formData.append('message', mensagem);

    // Enviar dados via fetch para Web3Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Exibir mensagem de sucesso no site
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Sua mensagem foi enviada com sucesso! Em breve retornaremos.';
            successMessage.style.cssText = 'color: green; font-weight: bold; margin-top: 1rem; text-align: center;';
            document.getElementById('contatoForm').appendChild(successMessage);

            // Limpar formulário
            document.getElementById('contatoForm').reset();

            // Remover mensagem após 5 segundos
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        } else {
            alert('Erro ao enviar a mensagem. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar a mensagem. Tente novamente.');
    });
});
