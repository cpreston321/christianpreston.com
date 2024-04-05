import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const contact = sqliteTable('contact', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
