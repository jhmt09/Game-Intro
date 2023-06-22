document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar o envio padrão do formulário

  const nick = document.getElementById('nickname').value;
  const pass = document.getElementById('password').value;

  // Envie os dados para o servidor
  fetch('/salvar-dados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nick, pass }),
  })
    .then(response => response.json())
    .then(data => {
      // Lógica para processar a resposta do servidor
      console.log(data);
      window.location.href = 'menu.html'; // Redirecionar para "menu.html" após salvar os dados
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
});




