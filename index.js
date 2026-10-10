import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import db from "./config/database.js"; //Ao importar ele roda o teste de conexão
import participantesRoutes from './routes/participanteRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());


//Aqui a gente conta para a app, quais rotas usar
app.use('/participantes', participantesRoutes)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT}`);
});