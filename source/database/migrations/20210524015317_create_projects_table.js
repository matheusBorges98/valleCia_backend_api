exports.up = knex => knex.schema.createTable('anuncio', table=>{
      table.increments('id')
      table.text('descricao')
    //relacionamento
    // 1 user N anuncios

    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')

    table.timestamps(true, true)
     
  })

exports.down = knex => knex.schema.droptable('anuncio')
