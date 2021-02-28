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
    const { titulo, conteudo, id } = req.body;
    let result = await carta.find()
    result = result.find( r => r._id == req.body.id);

    try {
           await carta.update({"_id":result._id},{$set: {"titulo":titulo, "conteudo":conteudo}});
          res.json(result);
          
      } catch (error) {
            console.log(error)         
      }
}

exports.delete = async (req, res) => {
     let id = req.params.id;

       let result = await carta.find();
       result = result.find( r => r._id == id);
   try {
        let  del = await carta.remove({"_id":result._id});
        console.log(del)
        res.status(200).send('EXCLUIU COM SUCESSO');
   } catch (error) {
       console.log(error)
   }
}