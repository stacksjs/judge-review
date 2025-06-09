import type { Generated, Insertable, RawBuilder, Selectable, Updateable } from '@stacksjs/database'
import type { Operator } from '@stacksjs/orm'
import { sql } from '@stacksjs/database'
import { HttpError } from '@stacksjs/error-handling'
import { DB } from '@stacksjs/orm'
// soon, these will be auto-imported

import { BaseOrm } from '../utils/base'

export interface EmailSubscriptionsTable {
  id: Generated<number>
  email: string

  created_at?: string

  updated_at?: string

  deleted_at?: string

}

// Type for reading model data (created_at is required)
export type EmailSubscriptionRead = EmailSubscriptionsTable

// Type for creating/updating model data (created_at is optional)
export type EmailSubscriptionWrite = Omit<EmailSubscriptionsTable, 'created_at'> & {
  created_at?: string
}

export interface EmailSubscriptionResponse {
  data: EmailSubscriptionJsonResponse[]
  paging: {
    total_records: number
    page: number
    total_pages: number
  }
  next_cursor: number | null
}

export interface EmailSubscriptionJsonResponse extends Omit<Selectable<EmailSubscriptionRead>, 'password'> {
  [key: string]: any
}

export type NewEmailSubscription = Insertable<EmailSubscriptionWrite>
export type EmailSubscriptionUpdate = Updateable<EmailSubscriptionWrite>

export class EmailSubscriptionModel extends BaseOrm<EmailSubscriptionModel, EmailSubscriptionsTable, EmailSubscriptionJsonResponse> {
  private readonly hidden: Array<keyof EmailSubscriptionJsonResponse> = []
  private readonly fillable: Array<keyof EmailSubscriptionJsonResponse> = ['email', 'uuid']
  private readonly guarded: Array<keyof EmailSubscriptionJsonResponse> = []
  protected attributes = {} as EmailSubscriptionJsonResponse
  protected originalAttributes = {} as EmailSubscriptionJsonResponse
  private softDeletes = false
  protected selectFromQuery: any
  protected updateFromQuery: any
  protected deleteFromQuery: any
  protected hasSelect: boolean
  private customColumns: Record<string, unknown> = {}

  /**
   * This model inherits many query methods from BaseOrm:
   * - pluck, chunk, whereExists, has, doesntHave, whereHas, whereDoesntHave
   * - inRandomOrder, max, min, avg, paginate, get, and more
   *
   * See BaseOrm class for the full list of inherited methods.
   */

  constructor(emailSubscription: EmailSubscriptionJsonResponse | undefined) {
    super('email_subscriptions')
    if (emailSubscription) {
      this.attributes = { ...emailSubscription }
      this.originalAttributes = { ...emailSubscription }

      Object.keys(emailSubscription).forEach((key) => {
        if (!(key in this)) {
          this.customColumns[key] = (emailSubscription as EmailSubscriptionJsonResponse)[key]
        }
      })
    }

    this.withRelations = []
    this.selectFromQuery = DB.instance.selectFrom('email_subscriptions')
    this.updateFromQuery = DB.instance.updateTable('email_subscriptions')
    this.deleteFromQuery = DB.instance.deleteFrom('email_subscriptions')
    this.hasSelect = false
  }

  protected async loadRelations(models: EmailSubscriptionJsonResponse | EmailSubscriptionJsonResponse[]): Promise<void> {
    // Handle both single model and array of models
    const modelArray = Array.isArray(models) ? models : [models]
    if (!modelArray.length)
      return

    const modelIds = modelArray.map(model => model.id)

    for (const relation of this.withRelations) {
      const relatedRecords = await DB.instance
        .selectFrom(relation)
        .where('emailSubscription_id', 'in', modelIds)
        .selectAll()
        .execute()

      if (Array.isArray(models)) {
        models.map((model: EmailSubscriptionJsonResponse) => {
          const records = relatedRecords.filter((record: { emailSubscription_id: number }) => {
            return record.emailSubscription_id === model.id
          })

          model[relation] = records.length === 1 ? records[0] : records
          return model
        })
      }
      else {
        const records = relatedRecords.filter((record: { emailSubscription_id: number }) => {
          return record.emailSubscription_id === models.id
        })

        models[relation] = records.length === 1 ? records[0] : records
      }
    }
  }

  static with(relations: string[]): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWith(relations)
  }

  protected mapCustomGetters(models: EmailSubscriptionJsonResponse | EmailSubscriptionJsonResponse[]): void {
    const data = models

    if (Array.isArray(data)) {
      data.map((model: EmailSubscriptionJsonResponse) => {
        const customGetter = {
          default: () => {
          },

        }

        for (const [key, fn] of Object.entries(customGetter)) {
          (model as any)[key] = fn()
        }

        return model
      })
    }
    else {
      const model = data

      const customGetter = {
        default: () => {
        },

      }

      for (const [key, fn] of Object.entries(customGetter)) {
        (model as any)[key] = fn()
      }
    }
  }

  async mapCustomSetters(model: NewEmailSubscription | EmailSubscriptionUpdate): Promise<void> {
    const customSetter = {
      default: () => {
      },

    }

    for (const [key, fn] of Object.entries(customSetter)) {
      (model as any)[key] = await fn()
    }
  }

  get id(): number {
    return this.attributes.id
  }

  get email(): string {
    return this.attributes.email
  }

  get created_at(): string | undefined {
    return this.attributes.created_at
  }

  get updated_at(): string | undefined {
    return this.attributes.updated_at
  }

  get deleted_at(): string | undefined {
    return this.attributes.deleted_at
  }

  set email(value: string) {
    this.attributes.email = value
  }

  set updated_at(value: string) {
    this.attributes.updated_at = value
  }

  set deleted_at(value: string) {
    this.attributes.deleted_at = value
  }

  static select(params: (keyof EmailSubscriptionJsonResponse)[] | RawBuilder<string> | string): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applySelect(params)
  }

  // Method to find a EmailSubscription by ID
  static async find(id: number): Promise<EmailSubscriptionModel | undefined> {
    const query = DB.instance.selectFrom('email_subscriptions').where('id', '=', id).selectAll()

    const model = await query.executeTakeFirst()

    if (!model)
      return undefined

    const instance = new EmailSubscriptionModel(undefined)
    return instance.createInstance(model)
  }

  static async first(): Promise<EmailSubscriptionModel | undefined> {
    const instance = new EmailSubscriptionModel(undefined)

    const model = await instance.applyFirst()

    const data = new EmailSubscriptionModel(model)

    return data
  }

  static async last(): Promise<EmailSubscriptionModel | undefined> {
    const instance = new EmailSubscriptionModel(undefined)

    const model = await instance.applyLast()

    if (!model)
      return undefined

    return new EmailSubscriptionModel(model)
  }

  static async firstOrFail(): Promise<EmailSubscriptionModel | undefined> {
    const instance = new EmailSubscriptionModel(undefined)

    return await instance.applyFirstOrFail()
  }

  static async all(): Promise<EmailSubscriptionModel[]> {
    const instance = new EmailSubscriptionModel(undefined)

    const models = await DB.instance.selectFrom('email_subscriptions').selectAll().execute()

    instance.mapCustomGetters(models)

    const data = await Promise.all(models.map(async (model: EmailSubscriptionJsonResponse) => {
      return new EmailSubscriptionModel(model)
    }))

    return data
  }

  static async findOrFail(id: number): Promise<EmailSubscriptionModel | undefined> {
    const instance = new EmailSubscriptionModel(undefined)

    return await instance.applyFindOrFail(id)
  }

  static async findMany(ids: number[]): Promise<EmailSubscriptionModel[]> {
    const instance = new EmailSubscriptionModel(undefined)
    if (instance.softDeletes) {
      query = query.where('deleted_at', 'is', null)
    }
    const models = await instance.applyFindMany(ids)

    return models.map((modelItem: EmailSubscriptionJsonResponse) => instance.parseResult(new EmailSubscriptionModel(modelItem)))
  }

  static async latest(column: keyof EmailSubscriptionsTable = 'created_at'): Promise<EmailSubscriptionModel | undefined> {
    const instance = new EmailSubscriptionModel(undefined)

    const model = await instance.selectFromQuery
      .selectAll()
      .orderBy(column, 'desc')
      .limit(1)
      .executeTakeFirst()

    if (!model)
      return undefined

    return new EmailSubscriptionModel(model)
  }

  static async oldest(column: keyof EmailSubscriptionsTable = 'created_at'): Promise<EmailSubscriptionModel | undefined> {
    const instance = new EmailSubscriptionModel(undefined)

    const model = await instance.selectFromQuery
      .selectAll()
      .orderBy(column, 'asc')
      .limit(1)
      .executeTakeFirst()

    if (!model)
      return undefined

    return new EmailSubscriptionModel(model)
  }

  static skip(count: number): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applySkip(count)
  }

  static take(count: number): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyTake(count)
  }

  static where<V = string>(column: keyof EmailSubscriptionsTable, ...args: [V] | [Operator, V]): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhere<V>(column, ...args)
  }

  static orWhere(...conditions: [string, any][]): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyOrWhere(...conditions)
  }

  static whereNotIn<V = number>(column: keyof EmailSubscriptionsTable, values: V[]): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereNotIn<V>(column, values)
  }

  static whereBetween<V = number>(column: keyof EmailSubscriptionsTable, range: [V, V]): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereBetween<V>(column, range)
  }

  static whereRef(column: keyof EmailSubscriptionsTable, ...args: string[]): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereRef(column, ...args)
  }

  static when(condition: boolean, callback: (query: EmailSubscriptionModel) => EmailSubscriptionModel): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhen(condition, callback as any)
  }

  static whereNull(column: keyof EmailSubscriptionsTable): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereNull(column)
  }

  static whereNotNull(column: keyof EmailSubscriptionsTable): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereNotNull(column)
  }

  static whereLike(column: keyof EmailSubscriptionsTable, value: string): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereLike(column, value)
  }

  static orderBy(column: keyof EmailSubscriptionsTable, order: 'asc' | 'desc'): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyOrderBy(column, order)
  }

  static orderByAsc(column: keyof EmailSubscriptionsTable): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyOrderByAsc(column)
  }

  static orderByDesc(column: keyof EmailSubscriptionsTable): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyOrderByDesc(column)
  }

  static groupBy(column: keyof EmailSubscriptionsTable): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyGroupBy(column)
  }

  static having<V = string>(column: keyof EmailSubscriptionsTable, operator: Operator, value: V): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyHaving<V>(column, operator, value)
  }

  static inRandomOrder(): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyInRandomOrder()
  }

  static whereColumn(first: keyof EmailSubscriptionsTable, operator: Operator, second: keyof EmailSubscriptionsTable): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereColumn(first, operator, second)
  }

  static async max(field: keyof EmailSubscriptionsTable): Promise<number> {
    const instance = new EmailSubscriptionModel(undefined)

    return await instance.applyMax(field)
  }

  static async min(field: keyof EmailSubscriptionsTable): Promise<number> {
    const instance = new EmailSubscriptionModel(undefined)

    return await instance.applyMin(field)
  }

  static async avg(field: keyof EmailSubscriptionsTable): Promise<number> {
    const instance = new EmailSubscriptionModel(undefined)

    return await instance.applyAvg(field)
  }

  static async sum(field: keyof EmailSubscriptionsTable): Promise<number> {
    const instance = new EmailSubscriptionModel(undefined)

    return await instance.applySum(field)
  }

  static async count(): Promise<number> {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyCount()
  }

  static async get(): Promise<EmailSubscriptionModel[]> {
    const instance = new EmailSubscriptionModel(undefined)

    const results = await instance.applyGet()

    return results.map((item: EmailSubscriptionJsonResponse) => instance.createInstance(item))
  }

  static async pluck<K extends keyof EmailSubscriptionModel>(field: K): Promise<EmailSubscriptionModel[K][]> {
    const instance = new EmailSubscriptionModel(undefined)

    return await instance.applyPluck(field)
  }

  static async chunk(size: number, callback: (models: EmailSubscriptionModel[]) => Promise<void>): Promise<void> {
    const instance = new EmailSubscriptionModel(undefined)

    await instance.applyChunk(size, async (models) => {
      const modelInstances = models.map((item: EmailSubscriptionJsonResponse) => instance.createInstance(item))
      await callback(modelInstances)
    })
  }

  static async paginate(options: { limit?: number, offset?: number, page?: number } = { limit: 10, offset: 0, page: 1 }): Promise<{
    data: EmailSubscriptionModel[]
    paging: {
      total_records: number
      page: number
      total_pages: number
    }
    next_cursor: number | null
  }> {
    const instance = new EmailSubscriptionModel(undefined)

    const result = await instance.applyPaginate(options)

    return {
      data: result.data.map((item: EmailSubscriptionJsonResponse) => instance.createInstance(item)),
      paging: result.paging,
      next_cursor: result.next_cursor,
    }
  }

  // Instance method for creating model instances
  createInstance(data: EmailSubscriptionJsonResponse): EmailSubscriptionModel {
    return new EmailSubscriptionModel(data)
  }

  async applyCreate(newEmailSubscription: NewEmailSubscription): Promise<EmailSubscriptionModel> {
    const filteredValues = Object.fromEntries(
      Object.entries(newEmailSubscription).filter(([key]) =>
        !this.guarded.includes(key) && this.fillable.includes(key),
      ),
    ) as NewEmailSubscription

    await this.mapCustomSetters(filteredValues)

    const result = await DB.instance.insertInto('email_subscriptions')
      .values(filteredValues)
      .executeTakeFirst()

    const model = await DB.instance.selectFrom('email_subscriptions')
      .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
      .selectAll()
      .executeTakeFirst()

    if (!model) {
      throw new HttpError(500, 'Failed to retrieve created EmailSubscription')
    }

    return this.createInstance(model)
  }

  async create(newEmailSubscription: NewEmailSubscription): Promise<EmailSubscriptionModel> {
    return await this.applyCreate(newEmailSubscription)
  }

  static async create(newEmailSubscription: NewEmailSubscription): Promise<EmailSubscriptionModel> {
    const instance = new EmailSubscriptionModel(undefined)
    return await instance.applyCreate(newEmailSubscription)
  }

  static async firstOrCreate(search: Partial<EmailSubscriptionsTable>, values: NewEmailSubscription = {} as NewEmailSubscription): Promise<EmailSubscriptionModel> {
    // First try to find a record matching the search criteria
    const instance = new EmailSubscriptionModel(undefined)

    // Apply all search conditions
    for (const [key, value] of Object.entries(search)) {
      instance.selectFromQuery = instance.selectFromQuery.where(key, '=', value)
    }

    // Try to find the record
    const existingRecord = await instance.applyFirst()

    if (existingRecord) {
      return instance.createInstance(existingRecord)
    }

    // If no record exists, create a new one with combined search criteria and values
    const createData = { ...search, ...values } as NewEmailSubscription
    return await EmailSubscriptionModel.create(createData)
  }

  static async updateOrCreate(search: Partial<EmailSubscriptionsTable>, values: NewEmailSubscription = {} as NewEmailSubscription): Promise<EmailSubscriptionModel> {
    // First try to find a record matching the search criteria
    const instance = new EmailSubscriptionModel(undefined)

    // Apply all search conditions
    for (const [key, value] of Object.entries(search)) {
      instance.selectFromQuery = instance.selectFromQuery.where(key, '=', value)
    }

    // Try to find the record
    const existingRecord = await instance.applyFirst()

    if (existingRecord) {
      // If record exists, update it with the new values
      const model = instance.createInstance(existingRecord)
      const updatedModel = await model.update(values as EmailSubscriptionUpdate)

      // Return the updated model instance
      if (updatedModel) {
        return updatedModel
      }

      // If update didn't return a model, fetch it again to ensure we have latest data
      const refreshedModel = await instance.applyFirst()
      return instance.createInstance(refreshedModel!)
    }

    // If no record exists, create a new one with combined search criteria and values
    const createData = { ...search, ...values } as NewEmailSubscription
    return await EmailSubscriptionModel.create(createData)
  }

  async update(newEmailSubscription: EmailSubscriptionUpdate): Promise<EmailSubscriptionModel | undefined> {
    const filteredValues = Object.fromEntries(
      Object.entries(newEmailSubscription).filter(([key]) =>
        !this.guarded.includes(key) && this.fillable.includes(key),
      ),
    ) as EmailSubscriptionUpdate

    await this.mapCustomSetters(filteredValues)

    filteredValues.updated_at = new Date().toISOString()

    await DB.instance.updateTable('email_subscriptions')
      .set(filteredValues)
      .where('id', '=', this.id)
      .executeTakeFirst()

    if (this.id) {
      // Get the updated data
      const model = await DB.instance.selectFrom('email_subscriptions')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated EmailSubscription')
      }

      return this.createInstance(model)
    }

    return undefined
  }

  async forceUpdate(newEmailSubscription: EmailSubscriptionUpdate): Promise<EmailSubscriptionModel | undefined> {
    await DB.instance.updateTable('email_subscriptions')
      .set(newEmailSubscription)
      .where('id', '=', this.id)
      .executeTakeFirst()

    if (this.id) {
      // Get the updated data
      const model = await DB.instance.selectFrom('email_subscriptions')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated EmailSubscription')
      }

      return this.createInstance(model)
    }

    return undefined
  }

  async save(): Promise<EmailSubscriptionModel> {
    // If the model has an ID, update it; otherwise, create a new record
    if (this.id) {
      // Update existing record
      await DB.instance.updateTable('email_subscriptions')
        .set(this.attributes as EmailSubscriptionUpdate)
        .where('id', '=', this.id)
        .executeTakeFirst()

      // Get the updated data
      const model = await DB.instance.selectFrom('email_subscriptions')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated EmailSubscription')
      }

      return this.createInstance(model)
    }
    else {
      // Create new record
      const result = await DB.instance.insertInto('email_subscriptions')
        .values(this.attributes as NewEmailSubscription)
        .executeTakeFirst()

      // Get the created data
      const model = await DB.instance.selectFrom('email_subscriptions')
        .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve created EmailSubscription')
      }

      return this.createInstance(model)
    }
  }

  static async createMany(newEmailSubscription: NewEmailSubscription[]): Promise<void> {
    const instance = new EmailSubscriptionModel(undefined)

    const valuesFiltered = newEmailSubscription.map((newEmailSubscription: NewEmailSubscription) => {
      const filteredValues = Object.fromEntries(
        Object.entries(newEmailSubscription).filter(([key]) =>
          !instance.guarded.includes(key) && instance.fillable.includes(key),
        ),
      ) as NewEmailSubscription

      return filteredValues
    })

    await DB.instance.insertInto('email_subscriptions')
      .values(valuesFiltered)
      .executeTakeFirst()
  }

  static async forceCreate(newEmailSubscription: NewEmailSubscription): Promise<EmailSubscriptionModel> {
    const result = await DB.instance.insertInto('email_subscriptions')
      .values(newEmailSubscription)
      .executeTakeFirst()

    const instance = new EmailSubscriptionModel(undefined)
    const model = await DB.instance.selectFrom('email_subscriptions')
      .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
      .selectAll()
      .executeTakeFirst()

    if (!model) {
      throw new HttpError(500, 'Failed to retrieve created EmailSubscription')
    }

    return instance.createInstance(model)
  }

  // Method to remove a EmailSubscription
  async delete(): Promise<number> {
    if (this.id === undefined)
      this.deleteFromQuery.execute()

    if (instance.softDeletes) {
      query = query.where('deleted_at', 'is', null)
    }

    const deleted = await DB.instance.deleteFrom('email_subscriptions')
      .where('id', '=', this.id)
      .execute()

    return deleted.numDeletedRows
  }

  static async remove(id: number): Promise<any> {
    const instance = new EmailSubscriptionModel(undefined)

    if (instance.softDeletes) {
      return await DB.instance.updateTable('email_subscriptions')
        .set({
          deleted_at: sql.raw('CURRENT_TIMESTAMP'),
        })
        .where('id', '=', id)
        .execute()
    }

    return await DB.instance.deleteFrom('email_subscriptions')
      .where('id', '=', id)
      .execute()
  }

  static whereEmail(value: string): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('email', '=', value)

    return instance
  }

  static whereIn<V = number>(column: keyof EmailSubscriptionsTable, values: V[]): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyWhereIn<V>(column, values)
  }

  static distinct(column: keyof EmailSubscriptionJsonResponse): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyDistinct(column)
  }

  static join(table: string, firstCol: string, secondCol: string): EmailSubscriptionModel {
    const instance = new EmailSubscriptionModel(undefined)

    return instance.applyJoin(table, firstCol, secondCol)
  }

  toJSON(): EmailSubscriptionJsonResponse {
    const output = {

      id: this.id,
      email: this.email,

      created_at: this.created_at,

      updated_at: this.updated_at,

      deleted_at: this.deleted_at,

      ...this.customColumns,
    }

    return output
  }

  parseResult(model: EmailSubscriptionModel): EmailSubscriptionModel {
    for (const hiddenAttribute of this.hidden) {
      delete model[hiddenAttribute as keyof EmailSubscriptionModel]
    }

    return model
  }

  // Add a protected applyFind implementation
  protected async applyFind(id: number): Promise<EmailSubscriptionModel | undefined> {
    const model = await DB.instance.selectFrom(this.tableName)
      .where('id', '=', id)
      .selectAll()
      .executeTakeFirst()

    if (!model)
      return undefined

    this.mapCustomGetters(model)

    await this.loadRelations(model)

    // Return a proper instance using the factory method
    return this.createInstance(model)
  }
}

export async function find(id: number): Promise<EmailSubscriptionModel | undefined> {
  const query = DB.instance.selectFrom('email_subscriptions').where('id', '=', id).selectAll()

  const model = await query.executeTakeFirst()

  if (!model)
    return undefined

  const instance = new EmailSubscriptionModel(undefined)
  return instance.createInstance(model)
}

export async function count(): Promise<number> {
  const results = await EmailSubscriptionModel.count()

  return results
}

export async function create(newEmailSubscription: NewEmailSubscription): Promise<EmailSubscriptionModel> {
  const instance = new EmailSubscriptionModel(undefined)
  return await instance.applyCreate(newEmailSubscription)
}

export async function rawQuery(rawQuery: string): Promise<any> {
  return await sql`${rawQuery}`.execute(DB.instance)
}

export async function remove(id: number): Promise<void> {
  await DB.instance.deleteFrom('email_subscriptions')
    .where('id', '=', id)
    .execute()
}

export async function whereEmail(value: string): Promise<EmailSubscriptionModel[]> {
  const query = DB.instance.selectFrom('email_subscriptions').where('email', '=', value)
  const results: EmailSubscriptionJsonResponse = await query.execute()

  return results.map((modelItem: EmailSubscriptionJsonResponse) => new EmailSubscriptionModel(modelItem))
}

export const EmailSubscription = EmailSubscriptionModel

export default EmailSubscription
