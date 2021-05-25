
exports.up = knex => knex.schema.createTable('users', table=>{
      table.increments('id');
      table.text('nome').unique().notNullable();
      table.integer('idade');
      table.date('dt_nascimento');
      table.text('email');
      table.text('contato');
      table.text('usuario');
      table.text('senha');
      table.text('cidade');
      table.integer('classificacao');
      table.text('descricao');
      table.text('verificado');
      table.integer('visitas');
      table.text('genero');
      table.text('estado');

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.droptable('users')