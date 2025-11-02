// Script básico para validação do formulário de contato
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (email && telefone) {
        alert('Obrigado pelo contato! Entraremos em contato em breve.');
        // Aqui você pode adicionar lógica para enviar os dados para um servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
