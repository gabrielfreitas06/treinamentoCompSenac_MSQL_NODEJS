import db from '../config/database.js';

//Operação para cadastrar (Create)

export const criarParticipante = async (req, res) => {
    // O req.body é onde chegam os dados enviados na requisição
    const {nome, email} = req.body;
try{
    const [resultado] = await db.execute(
        'INSERT INTO participantes (nome, email) VALUES(?,?)',
        [nome, email]// As "?" evitam falhas de segurança
                     // SQL injetction
    );
    res.status(201).json({id: resultado.insertID, nome, email});
}catch(erro){
    res.status(500).json({erro: 'Erro ao criar participante', detalhe:erro.message})
}};

export const listarParticipante = async (req, res) =>{
    try{
        const [participantes] = await db.execute('Select * from participantes');
        res.status(200).json(participantes);
    }
    catch(erro) {
        res.status(500).json({erro: 'Erro ao buscar participantes'});
    }};