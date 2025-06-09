import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('court_houses')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('uuid', 'varchar(255)')
    .addColumn('name', 'varchar(255)', col => col.notNull())
    .addColumn('image', 'varchar(255)', col => col.notNull())
    .addColumn('address', 'varchar(255)', col => col.notNull())
    .addColumn('city', 'varchar(100)', col => col.notNull())
    .addColumn('state', 'varchar(2)', col => col.notNull())
    .addColumn('zip_code', 'varchar(255)', col => col.notNull())
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql.raw('CURRENT_TIMESTAMP')))
    .addColumn('updated_at', 'timestamp')
    .execute()

  await db.schema.createIndex('court_houses_name_index').on('court_houses').columns(['name']).execute()
  await db.schema.createIndex('court_houses_id_index').on('court_houses').column('id').execute()
}
