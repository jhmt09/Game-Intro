const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 5500; // Porta do servidor

// Configurando o middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando a conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'game_retro',
  password: '35561122',
  port: 5432,
});

// Rota para salvar os dados de login no banco de dados
app.post('/salvar-dados', (req, res) => {
  const { nick, pass } = req.body;

  // Executar a consulta SQL para inserir os dados
  const query = 'INSERT INTO username (username, password) VALUES ($1, $2)';
  const values = [nick, pass];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao salvar os dados' });
    } else {
      res.json({ message: 'Dados salvos com sucesso' });
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});



  
