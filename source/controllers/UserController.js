const knex = require('../database')

module.exports = {

   async index(req, res) {
       
       try{
        const results = await knex('users')
        return res.json(results)

       }catch(err){

           console.log(err)
       }
      
    },

    async create(req, res, next){
        try{
            const {nome}            = req.body;
            const {idade}           = req.body;
            const {dt_nascimento}   = req.body;
            const {email}           = req.body;
            const {contato}         = req.body;
            const {usuario}         = req.body;
            const {senha}           = req.body;
            const {cidade}          = req.body;
            const {classificacao}   = req.body;
            const {descricao}       = req.body;
            const {verificado}      = req.body;
            const {visitas}         = req.body;
            const {genero}          = req.body;
            const {estado}          = req.body;

            await knex('users').insert({
                nome,
                idade,
                dt_nascimento,
                email,
                contato,
                usuario,
                senha,
                cidade,
                classificacao,
                descricao,
                verificado,
                visitas,
                genero,
                estado
            })

            return res.status(201).send();
        }catch(error){
            console.error(error);
            next(error);
        }
    },

    async update(req, res, next){
        try{
            const {username} = req.body
            const {id} = req.params

            await knex('users')
            .update({username})
            .where({id})

            return res.send()

        }catch(error){
            next(error)
        }
    },

    async delete(req,res,next){
        try{
            const {id} = req.params
            await knex('users')
            .where({id})
            .del()

            return res.send()
            
        }catch(error){
            next(error)
        }
    }


}