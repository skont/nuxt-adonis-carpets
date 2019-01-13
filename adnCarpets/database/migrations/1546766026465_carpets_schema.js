'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarpetsSchema extends Schema {
  up () {
    this.create('carpets', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('carpets')
  }
}

module.exports = CarpetsSchema
