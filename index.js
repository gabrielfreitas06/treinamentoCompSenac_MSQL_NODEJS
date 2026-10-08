import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import db from "./config/database.js"; //Ao importar ele roda o teste de conexão

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT}`);
});