import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//Teste de conexão com o banco de dados
try {
    const conection = await pool.getConnection();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
}catch (error){
    console.log("Erro ao conectar com o banco de dados", error);
}

export default pool;