import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Shortenurls extends BaseSchema {
  protected tableName = 'shortenurls'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('alias',255).unique()
      table.text('url')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
