import express from 'express';
import { criarParticipante,  listarParticipante} from '../controllers/participanteController.js';

const router = express.Router();
//Quando chamarem /participantes com o POST, roda o criarParticipantes
router.post('/', criarParticipante);
//Quando chamarem /participantes com o GET, roda a listarParticipante
router.get('/', listarParticipante);

export default router;