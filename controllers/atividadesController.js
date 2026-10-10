import db from '../config/database.js';

//Operação para cadastrar (Create)

export const criarAtividades = async (req, res) => {
    // O req.body é onde chegam os dados enviados na requisição
    const {nome, descricao, vagas_totais} = req.body;
    //Regra: Ao criar a atividade, as vagas disponíveis são iguais as totais 
    const vagas_disponiveis = vagas_totais;
try{
    const [resultado] = await db.execute(
        'INSERT INTO atividades (nome, descricao, vagas_totais, vagas_disponiveis) VALUES(?,?,?, ?)',
        [nome, descricao, vagas_totais, vagas_disponiveis]// As "?" evitam falhas de segurança
                     // SQL injetction
    );
    res.status(201).json({id: resultado.insertID, nome, descricao, vagas_totais, vagas_disponiveis});
}catch(erro){
    res.status(500).json({erro: 'Erro ao criar Atividade', detalhe:erro.message})
}};

export const listarAtividade = async (req, res) =>{
    try{
        const [Atividades] = await db.execute('Select * from Atividades');
        res.status(200).json(Atividades);
    }
    catch(erro) {
        res.status(500).json({erro: 'Erro ao buscar Atividades'});
    }};

//Atualizar

export const atualizarAtividades = async (req, res) => {
    // O req.body é onde chegam os dados enviados na requisição
    const {id} = req.params;

    const {nome, descricao, vagas_totais, vagas_disponiveis} = req.body;
try{
    const [resultado] = await db.execute(
        'UPDATE atividades SET nome = ?, descricao= ?, vagas_totais = ?, vagas_disponiveis = ? WHERE id = ?',
        [nome, descricao, vagas_totais, vagas_disponiveis, id]// As "?" evitam falhas de segurança
                     // SQL injetction
    );
    res.status(201).json({id: resultado.insertID, nome, descricao, vagas_totais, vagas_disponiveis});
    if (resultado.affectedRows === 0){
        return res.status(404).json({erro: "Atividade não encontrada!"});
    };
    res.status(200).json({mensagem: 'Atividade atualizada com sucesso!'});
}catch(erro){
    res.status(500).json({erro: 'Erro ao atualizar Atividade'});
}};

//Excluir

export const excluirAtividades = async (req, res) => {
    // O req.body é onde chegam os dados enviados na requisição
    const {id} = req.params;
try{
    const [resultado] = await db.execute(
        'DELETE FROM atividades WHERE id = ?',
        [id]);
    res.status(201).json({id: resultado.insertID, nome, descricao, vagas_totais, vagas_disponiveis});
    if (resultado.affectedRows === 0){
        return res.status(404).json({erro: "Atividade não encontrada!"});
    };
    res.status(200).json({mensagem: 'Atividade excluida com sucesso!'});
}catch(erro){
    res.status(500).json({erro: 'Erro ao excluir Atividade'});
}};