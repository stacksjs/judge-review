import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('judges')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('uuid', 'varchar(255)')
    .addColumn('name', 'varchar(255)', col => col.notNull())
    .addColumn('image_url', 'varchar(255)', col => col.notNull())
    .addColumn('court_house_id', 'integer', col =>
      col.references('court_houses.id').onDelete('cascade'))
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql.raw('CURRENT_TIMESTAMP')))
    .addColumn('updated_at', 'timestamp')
    .execute()

  await db.schema.createIndex('judges_name_index').on('judges').columns(['name']).execute()
  await db.schema.createIndex('judges_court_house_id_index').on('judges').column('court_house_id').execute()

  await db.schema.createIndex('judges_id_index').on('judges').column('id').execute()
}
