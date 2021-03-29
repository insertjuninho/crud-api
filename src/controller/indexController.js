const carta = require('../models/cartaModel');

exports.create = async (req, res) => {
    const { titulo, conteudo } = req.body;

      let payload = ({"titulo":titulo, "conteudo":conteudo})
      let insert = await carta.create(payload);
     
    return res.status(201).json(insert);
}

exports.full = async (req, res) => {

    let result = await carta.find();
        if (result.length == 0) {
            return res.send({ message: ' Não tem nenhuma carta cadastrada ' })
        }
        return res.json(result);
}

 exports.update = async (req, res) => {
    const { titulo, conteudo } = req.body;
    let result = await carta.findById(req.params.id)

    try {
           await carta.update({"_id": result._id}, {$set:{"titulo":titulo, "conteudo":conteudo}});
          res.status(200).json(result);
          
      } catch (error) {
         return res.send({
                message: 'Não foi possível realizar as alterações'
         })      
      }
}

exports.delete = async (req, res) => {
   try {
        await carta.findByIdAndRemove(req.params.id).exec();
     
        res.status(200).send('EXCLUIU COM SUCESSO');
   } catch (error) {
      return res.send(({
          message: 'Não foi possível excluir a carta solicitada'
      }))
   }
}
