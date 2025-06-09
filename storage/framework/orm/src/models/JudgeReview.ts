import type { Generated, Insertable, RawBuilder, Selectable, Updateable } from '@stacksjs/database'
import type { Operator } from '@stacksjs/orm'
import type { JudgeModel } from './Judge'
import type { UserModel } from './User'
import { randomUUIDv7 } from 'bun'
import { sql } from '@stacksjs/database'
import { HttpError } from '@stacksjs/error-handling'
import { dispatch } from '@stacksjs/events'

import { DB } from '@stacksjs/orm'

import { BaseOrm } from '../utils/base'

export interface JudgeReviewsTable {
  id: Generated<number>
  judge_id: number
  user_id: number
  title: string
  content: string
  rating: number
  likes: number
  comments: number
  type: string
  status: string
  uuid?: string

  created_at?: string

  updated_at?: string

}

// Type for reading model data (created_at is required)
export type JudgeReviewRead = JudgeReviewsTable

// Type for creating/updating model data (created_at is optional)
export type JudgeReviewWrite = Omit<JudgeReviewsTable, 'created_at'> & {
  created_at?: string
}

export interface JudgeReviewResponse {
  data: JudgeReviewJsonResponse[]
  paging: {
    total_records: number
    page: number
    total_pages: number
  }
  next_cursor: number | null
}

export interface JudgeReviewJsonResponse extends Omit<Selectable<JudgeReviewRead>, 'password'> {
  [key: string]: any
}

export type NewJudgeReview = Insertable<JudgeReviewWrite>
export type JudgeReviewUpdate = Updateable<JudgeReviewWrite>

export class JudgeReviewModel extends BaseOrm<JudgeReviewModel, JudgeReviewsTable, JudgeReviewJsonResponse> {
  private readonly hidden: Array<keyof JudgeReviewJsonResponse> = []
  private readonly fillable: Array<keyof JudgeReviewJsonResponse> = ['title', 'content', 'rating', 'likes', 'comments', 'type', 'status', 'uuid']
  private readonly guarded: Array<keyof JudgeReviewJsonResponse> = []
  protected attributes = {} as JudgeReviewJsonResponse
  protected originalAttributes = {} as JudgeReviewJsonResponse

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

  constructor(judgeReview: JudgeReviewJsonResponse | undefined) {
    super('judge_reviews')
    if (judgeReview) {
      this.attributes = { ...judgeReview }
      this.originalAttributes = { ...judgeReview }

      Object.keys(judgeReview).forEach((key) => {
        if (!(key in this)) {
          this.customColumns[key] = (judgeReview as JudgeReviewJsonResponse)[key]
        }
      })
    }

    this.withRelations = []
    this.selectFromQuery = DB.instance.selectFrom('judge_reviews')
    this.updateFromQuery = DB.instance.updateTable('judge_reviews')
    this.deleteFromQuery = DB.instance.deleteFrom('judge_reviews')
    this.hasSelect = false
  }

  protected async loadRelations(models: JudgeReviewJsonResponse | JudgeReviewJsonResponse[]): Promise<void> {
    // Handle both single model and array of models
    const modelArray = Array.isArray(models) ? models : [models]
    if (!modelArray.length)
      return

    const modelIds = modelArray.map(model => model.id)

    for (const relation of this.withRelations) {
      const relatedRecords = await DB.instance
        .selectFrom(relation)
        .where('judgeReview_id', 'in', modelIds)
        .selectAll()
        .execute()

      if (Array.isArray(models)) {
        models.map((model: JudgeReviewJsonResponse) => {
          const records = relatedRecords.filter((record: { judgeReview_id: number }) => {
            return record.judgeReview_id === model.id
          })

          model[relation] = records.length === 1 ? records[0] : records
          return model
        })
      }
      else {
        const records = relatedRecords.filter((record: { judgeReview_id: number }) => {
          return record.judgeReview_id === models.id
        })

        models[relation] = records.length === 1 ? records[0] : records
      }
    }
  }

  static with(relations: string[]): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWith(relations)
  }

  protected mapCustomGetters(models: JudgeReviewJsonResponse | JudgeReviewJsonResponse[]): void {
    const data = models

    if (Array.isArray(data)) {
      data.map((model: JudgeReviewJsonResponse) => {
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

  async mapCustomSetters(model: NewJudgeReview | JudgeReviewUpdate): Promise<void> {
    const customSetter = {
      default: () => {
      },

    }

    for (const [key, fn] of Object.entries(customSetter)) {
      (model as any)[key] = await fn()
    }
  }

  get judge_id(): number {
    return this.attributes.judge_id
  }

  get judge(): JudgeModel | undefined {
    return this.attributes.judge
  }

  get user_id(): number {
    return this.attributes.user_id
  }

  get user(): UserModel | undefined {
    return this.attributes.user
  }

  get id(): number {
    return this.attributes.id
  }

  get uuid(): string | undefined {
    return this.attributes.uuid
  }

  get title(): string {
    return this.attributes.title
  }

  get content(): string {
    return this.attributes.content
  }

  get rating(): number {
    return this.attributes.rating
  }

  get likes(): number {
    return this.attributes.likes
  }

  get comments(): number {
    return this.attributes.comments
  }

  get type(): string {
    return this.attributes.type
  }

  get status(): string {
    return this.attributes.status
  }

  get created_at(): string | undefined {
    return this.attributes.created_at
  }

  get updated_at(): string | undefined {
    return this.attributes.updated_at
  }

  set uuid(value: string) {
    this.attributes.uuid = value
  }

  set title(value: string) {
    this.attributes.title = value
  }

  set content(value: string) {
    this.attributes.content = value
  }

  set rating(value: number) {
    this.attributes.rating = value
  }

  set likes(value: number) {
    this.attributes.likes = value
  }

  set comments(value: number) {
    this.attributes.comments = value
  }

  set type(value: string) {
    this.attributes.type = value
  }

  set status(value: string) {
    this.attributes.status = value
  }

  set updated_at(value: string) {
    this.attributes.updated_at = value
  }

  static select(params: (keyof JudgeReviewJsonResponse)[] | RawBuilder<string> | string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applySelect(params)
  }

  // Method to find a JudgeReview by ID
  static async find(id: number): Promise<JudgeReviewModel | undefined> {
    const query = DB.instance.selectFrom('judge_reviews').where('id', '=', id).selectAll()

    const model = await query.executeTakeFirst()

    if (!model)
      return undefined

    const instance = new JudgeReviewModel(undefined)
    return instance.createInstance(model)
  }

  static async first(): Promise<JudgeReviewModel | undefined> {
    const instance = new JudgeReviewModel(undefined)

    const model = await instance.applyFirst()

    const data = new JudgeReviewModel(model)

    return data
  }

  static async last(): Promise<JudgeReviewModel | undefined> {
    const instance = new JudgeReviewModel(undefined)

    const model = await instance.applyLast()

    if (!model)
      return undefined

    return new JudgeReviewModel(model)
  }

  static async firstOrFail(): Promise<JudgeReviewModel | undefined> {
    const instance = new JudgeReviewModel(undefined)

    return await instance.applyFirstOrFail()
  }

  static async all(): Promise<JudgeReviewModel[]> {
    const instance = new JudgeReviewModel(undefined)

    const models = await DB.instance.selectFrom('judge_reviews').selectAll().execute()

    instance.mapCustomGetters(models)

    const data = await Promise.all(models.map(async (model: JudgeReviewJsonResponse) => {
      return new JudgeReviewModel(model)
    }))

    return data
  }

  static async findOrFail(id: number): Promise<JudgeReviewModel | undefined> {
    const instance = new JudgeReviewModel(undefined)

    return await instance.applyFindOrFail(id)
  }

  static async findMany(ids: number[]): Promise<JudgeReviewModel[]> {
    const instance = new JudgeReviewModel(undefined)

    const models = await instance.applyFindMany(ids)

    return models.map((modelItem: JudgeReviewJsonResponse) => instance.parseResult(new JudgeReviewModel(modelItem)))
  }

  static async latest(column: keyof JudgeReviewsTable = 'created_at'): Promise<JudgeReviewModel | undefined> {
    const instance = new JudgeReviewModel(undefined)

    const model = await instance.selectFromQuery
      .selectAll()
      .orderBy(column, 'desc')
      .limit(1)
      .executeTakeFirst()

    if (!model)
      return undefined

    return new JudgeReviewModel(model)
  }

  static async oldest(column: keyof JudgeReviewsTable = 'created_at'): Promise<JudgeReviewModel | undefined> {
    const instance = new JudgeReviewModel(undefined)

    const model = await instance.selectFromQuery
      .selectAll()
      .orderBy(column, 'asc')
      .limit(1)
      .executeTakeFirst()

    if (!model)
      return undefined

    return new JudgeReviewModel(model)
  }

  static skip(count: number): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applySkip(count)
  }

  static take(count: number): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyTake(count)
  }

  static where<V = string>(column: keyof JudgeReviewsTable, ...args: [V] | [Operator, V]): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhere<V>(column, ...args)
  }

  static orWhere(...conditions: [string, any][]): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyOrWhere(...conditions)
  }

  static whereNotIn<V = number>(column: keyof JudgeReviewsTable, values: V[]): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereNotIn<V>(column, values)
  }

  static whereBetween<V = number>(column: keyof JudgeReviewsTable, range: [V, V]): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereBetween<V>(column, range)
  }

  static whereRef(column: keyof JudgeReviewsTable, ...args: string[]): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereRef(column, ...args)
  }

  static when(condition: boolean, callback: (query: JudgeReviewModel) => JudgeReviewModel): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhen(condition, callback as any)
  }

  static whereNull(column: keyof JudgeReviewsTable): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereNull(column)
  }

  static whereNotNull(column: keyof JudgeReviewsTable): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereNotNull(column)
  }

  static whereLike(column: keyof JudgeReviewsTable, value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereLike(column, value)
  }

  static orderBy(column: keyof JudgeReviewsTable, order: 'asc' | 'desc'): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyOrderBy(column, order)
  }

  static orderByAsc(column: keyof JudgeReviewsTable): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyOrderByAsc(column)
  }

  static orderByDesc(column: keyof JudgeReviewsTable): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyOrderByDesc(column)
  }

  static groupBy(column: keyof JudgeReviewsTable): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyGroupBy(column)
  }

  static having<V = string>(column: keyof JudgeReviewsTable, operator: Operator, value: V): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyHaving<V>(column, operator, value)
  }

  static inRandomOrder(): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyInRandomOrder()
  }

  static whereColumn(first: keyof JudgeReviewsTable, operator: Operator, second: keyof JudgeReviewsTable): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereColumn(first, operator, second)
  }

  static async max(field: keyof JudgeReviewsTable): Promise<number> {
    const instance = new JudgeReviewModel(undefined)

    return await instance.applyMax(field)
  }

  static async min(field: keyof JudgeReviewsTable): Promise<number> {
    const instance = new JudgeReviewModel(undefined)

    return await instance.applyMin(field)
  }

  static async avg(field: keyof JudgeReviewsTable): Promise<number> {
    const instance = new JudgeReviewModel(undefined)

    return await instance.applyAvg(field)
  }

  static async sum(field: keyof JudgeReviewsTable): Promise<number> {
    const instance = new JudgeReviewModel(undefined)

    return await instance.applySum(field)
  }

  static async count(): Promise<number> {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyCount()
  }

  static async get(): Promise<JudgeReviewModel[]> {
    const instance = new JudgeReviewModel(undefined)

    const results = await instance.applyGet()

    return results.map((item: JudgeReviewJsonResponse) => instance.createInstance(item))
  }

  static async pluck<K extends keyof JudgeReviewModel>(field: K): Promise<JudgeReviewModel[K][]> {
    const instance = new JudgeReviewModel(undefined)

    return await instance.applyPluck(field)
  }

  static async chunk(size: number, callback: (models: JudgeReviewModel[]) => Promise<void>): Promise<void> {
    const instance = new JudgeReviewModel(undefined)

    await instance.applyChunk(size, async (models) => {
      const modelInstances = models.map((item: JudgeReviewJsonResponse) => instance.createInstance(item))
      await callback(modelInstances)
    })
  }

  static async paginate(options: { limit?: number, offset?: number, page?: number } = { limit: 10, offset: 0, page: 1 }): Promise<{
    data: JudgeReviewModel[]
    paging: {
      total_records: number
      page: number
      total_pages: number
    }
    next_cursor: number | null
  }> {
    const instance = new JudgeReviewModel(undefined)

    const result = await instance.applyPaginate(options)

    return {
      data: result.data.map((item: JudgeReviewJsonResponse) => instance.createInstance(item)),
      paging: result.paging,
      next_cursor: result.next_cursor,
    }
  }

  // Instance method for creating model instances
  createInstance(data: JudgeReviewJsonResponse): JudgeReviewModel {
    return new JudgeReviewModel(data)
  }

  async applyCreate(newJudgeReview: NewJudgeReview): Promise<JudgeReviewModel> {
    const filteredValues = Object.fromEntries(
      Object.entries(newJudgeReview).filter(([key]) =>
        !this.guarded.includes(key) && this.fillable.includes(key),
      ),
    ) as NewJudgeReview

    await this.mapCustomSetters(filteredValues)

    filteredValues.uuid = randomUUIDv7()

    const result = await DB.instance.insertInto('judge_reviews')
      .values(filteredValues)
      .executeTakeFirst()

    const model = await DB.instance.selectFrom('judge_reviews')
      .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
      .selectAll()
      .executeTakeFirst()

    if (!model) {
      throw new HttpError(500, 'Failed to retrieve created JudgeReview')
    }

    if (model)
      dispatch('judgeReview:created', model)
    return this.createInstance(model)
  }

  async create(newJudgeReview: NewJudgeReview): Promise<JudgeReviewModel> {
    return await this.applyCreate(newJudgeReview)
  }

  static async create(newJudgeReview: NewJudgeReview): Promise<JudgeReviewModel> {
    const instance = new JudgeReviewModel(undefined)
    return await instance.applyCreate(newJudgeReview)
  }

  static async firstOrCreate(search: Partial<JudgeReviewsTable>, values: NewJudgeReview = {} as NewJudgeReview): Promise<JudgeReviewModel> {
    // First try to find a record matching the search criteria
    const instance = new JudgeReviewModel(undefined)

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
    const createData = { ...search, ...values } as NewJudgeReview
    return await JudgeReviewModel.create(createData)
  }

  static async updateOrCreate(search: Partial<JudgeReviewsTable>, values: NewJudgeReview = {} as NewJudgeReview): Promise<JudgeReviewModel> {
    // First try to find a record matching the search criteria
    const instance = new JudgeReviewModel(undefined)

    // Apply all search conditions
    for (const [key, value] of Object.entries(search)) {
      instance.selectFromQuery = instance.selectFromQuery.where(key, '=', value)
    }

    // Try to find the record
    const existingRecord = await instance.applyFirst()

    if (existingRecord) {
      // If record exists, update it with the new values
      const model = instance.createInstance(existingRecord)
      const updatedModel = await model.update(values as JudgeReviewUpdate)

      // Return the updated model instance
      if (updatedModel) {
        return updatedModel
      }

      // If update didn't return a model, fetch it again to ensure we have latest data
      const refreshedModel = await instance.applyFirst()
      return instance.createInstance(refreshedModel!)
    }

    // If no record exists, create a new one with combined search criteria and values
    const createData = { ...search, ...values } as NewJudgeReview
    return await JudgeReviewModel.create(createData)
  }

  async update(newJudgeReview: JudgeReviewUpdate): Promise<JudgeReviewModel | undefined> {
    const filteredValues = Object.fromEntries(
      Object.entries(newJudgeReview).filter(([key]) =>
        !this.guarded.includes(key) && this.fillable.includes(key),
      ),
    ) as JudgeReviewUpdate

    await this.mapCustomSetters(filteredValues)

    filteredValues.updated_at = new Date().toISOString()

    await DB.instance.updateTable('judge_reviews')
      .set(filteredValues)
      .where('id', '=', this.id)
      .executeTakeFirst()

    if (this.id) {
      // Get the updated data
      const model = await DB.instance.selectFrom('judge_reviews')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated JudgeReview')
      }

      if (model)
        dispatch('judgeReview:updated', model)
      return this.createInstance(model)
    }

    return undefined
  }

  async forceUpdate(newJudgeReview: JudgeReviewUpdate): Promise<JudgeReviewModel | undefined> {
    await DB.instance.updateTable('judge_reviews')
      .set(newJudgeReview)
      .where('id', '=', this.id)
      .executeTakeFirst()

    if (this.id) {
      // Get the updated data
      const model = await DB.instance.selectFrom('judge_reviews')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated JudgeReview')
      }

      if (this)
        dispatch('judgeReview:updated', model)
      return this.createInstance(model)
    }

    return undefined
  }

  async save(): Promise<JudgeReviewModel> {
    // If the model has an ID, update it; otherwise, create a new record
    if (this.id) {
      // Update existing record
      await DB.instance.updateTable('judge_reviews')
        .set(this.attributes as JudgeReviewUpdate)
        .where('id', '=', this.id)
        .executeTakeFirst()

      // Get the updated data
      const model = await DB.instance.selectFrom('judge_reviews')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated JudgeReview')
      }

      if (this)
        dispatch('judgeReview:updated', model)
      return this.createInstance(model)
    }
    else {
      // Create new record
      const result = await DB.instance.insertInto('judge_reviews')
        .values(this.attributes as NewJudgeReview)
        .executeTakeFirst()

      // Get the created data
      const model = await DB.instance.selectFrom('judge_reviews')
        .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve created JudgeReview')
      }

      if (this)
        dispatch('judgeReview:created', model)
      return this.createInstance(model)
    }
  }

  static async createMany(newJudgeReview: NewJudgeReview[]): Promise<void> {
    const instance = new JudgeReviewModel(undefined)

    const valuesFiltered = newJudgeReview.map((newJudgeReview: NewJudgeReview) => {
      const filteredValues = Object.fromEntries(
        Object.entries(newJudgeReview).filter(([key]) =>
          !instance.guarded.includes(key) && instance.fillable.includes(key),
        ),
      ) as NewJudgeReview

      filteredValues.uuid = randomUUIDv7()

      return filteredValues
    })

    await DB.instance.insertInto('judge_reviews')
      .values(valuesFiltered)
      .executeTakeFirst()
  }

  static async forceCreate(newJudgeReview: NewJudgeReview): Promise<JudgeReviewModel> {
    const result = await DB.instance.insertInto('judge_reviews')
      .values(newJudgeReview)
      .executeTakeFirst()

    const instance = new JudgeReviewModel(undefined)
    const model = await DB.instance.selectFrom('judge_reviews')
      .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
      .selectAll()
      .executeTakeFirst()

    if (!model) {
      throw new HttpError(500, 'Failed to retrieve created JudgeReview')
    }

    if (model)
      dispatch('judgeReview:created', model)

    return instance.createInstance(model)
  }

  // Method to remove a JudgeReview
  async delete(): Promise<number> {
    if (this.id === undefined)
      this.deleteFromQuery.execute()
    const model = await this.find(Number(this.id))

    if (model)
      dispatch('judgeReview:deleted', model)

    const deleted = await DB.instance.deleteFrom('judge_reviews')
      .where('id', '=', this.id)
      .execute()

    return deleted.numDeletedRows
  }

  static async remove(id: number): Promise<any> {
    const instance = new JudgeReviewModel(undefined)

    const model = await instance.find(Number(id))

    if (model)
      dispatch('judgeReview:deleted', model)

    return await DB.instance.deleteFrom('judge_reviews')
      .where('id', '=', id)
      .execute()
  }

  static whereTitle(value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('title', '=', value)

    return instance
  }

  static whereContent(value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('content', '=', value)

    return instance
  }

  static whereRating(value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('rating', '=', value)

    return instance
  }

  static whereLikes(value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('likes', '=', value)

    return instance
  }

  static whereComments(value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('comments', '=', value)

    return instance
  }

  static whereType(value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('type', '=', value)

    return instance
  }

  static whereStatus(value: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('status', '=', value)

    return instance
  }

  static whereIn<V = number>(column: keyof JudgeReviewsTable, values: V[]): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyWhereIn<V>(column, values)
  }

  async judgeBelong(): Promise<JudgeModel> {
    if (this.judge_id === undefined)
      throw new HttpError(500, 'Relation Error!')

    const model = await Judge
      .where('id', '=', this.judge_id)
      .first()

    if (!model)
      throw new HttpError(500, 'Model Relation Not Found!')

    return model
  }

  async userBelong(): Promise<UserModel> {
    if (this.user_id === undefined)
      throw new HttpError(500, 'Relation Error!')

    const model = await User
      .where('id', '=', this.user_id)
      .first()

    if (!model)
      throw new HttpError(500, 'Model Relation Not Found!')

    return model
  }

  toSearchableObject(): Partial<JudgeReviewJsonResponse> {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      rating: this.rating,
    }
  }

  static distinct(column: keyof JudgeReviewJsonResponse): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyDistinct(column)
  }

  static join(table: string, firstCol: string, secondCol: string): JudgeReviewModel {
    const instance = new JudgeReviewModel(undefined)

    return instance.applyJoin(table, firstCol, secondCol)
  }

  toJSON(): JudgeReviewJsonResponse {
    const output = {

      uuid: this.uuid,

      id: this.id,
      title: this.title,
      content: this.content,
      rating: this.rating,
      likes: this.likes,
      comments: this.comments,
      type: this.type,
      status: this.status,

      created_at: this.created_at,

      updated_at: this.updated_at,

      judge_id: this.judge_id,
      judge: this.judge,
      user_id: this.user_id,
      user: this.user,
      ...this.customColumns,
    }

    return output
  }

  parseResult(model: JudgeReviewModel): JudgeReviewModel {
    for (const hiddenAttribute of this.hidden) {
      delete model[hiddenAttribute as keyof JudgeReviewModel]
    }

    return model
  }

  // Add a protected applyFind implementation
  protected async applyFind(id: number): Promise<JudgeReviewModel | undefined> {
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

export async function find(id: number): Promise<JudgeReviewModel | undefined> {
  const query = DB.instance.selectFrom('judge_reviews').where('id', '=', id).selectAll()

  const model = await query.executeTakeFirst()

  if (!model)
    return undefined

  const instance = new JudgeReviewModel(undefined)
  return instance.createInstance(model)
}

export async function count(): Promise<number> {
  const results = await JudgeReviewModel.count()

  return results
}

export async function create(newJudgeReview: NewJudgeReview): Promise<JudgeReviewModel> {
  const instance = new JudgeReviewModel(undefined)
  return await instance.applyCreate(newJudgeReview)
}

export async function rawQuery(rawQuery: string): Promise<any> {
  return await sql`${rawQuery}`.execute(DB.instance)
}

export async function remove(id: number): Promise<void> {
  await DB.instance.deleteFrom('judge_reviews')
    .where('id', '=', id)
    .execute()
}

export async function whereTitle(value: string): Promise<JudgeReviewModel[]> {
  const query = DB.instance.selectFrom('judge_reviews').where('title', '=', value)
  const results: JudgeReviewJsonResponse = await query.execute()

  return results.map((modelItem: JudgeReviewJsonResponse) => new JudgeReviewModel(modelItem))
}

export async function whereContent(value: string): Promise<JudgeReviewModel[]> {
  const query = DB.instance.selectFrom('judge_reviews').where('content', '=', value)
  const results: JudgeReviewJsonResponse = await query.execute()

  return results.map((modelItem: JudgeReviewJsonResponse) => new JudgeReviewModel(modelItem))
}

export async function whereRating(value: number): Promise<JudgeReviewModel[]> {
  const query = DB.instance.selectFrom('judge_reviews').where('rating', '=', value)
  const results: JudgeReviewJsonResponse = await query.execute()

  return results.map((modelItem: JudgeReviewJsonResponse) => new JudgeReviewModel(modelItem))
}

export async function whereLikes(value: number): Promise<JudgeReviewModel[]> {
  const query = DB.instance.selectFrom('judge_reviews').where('likes', '=', value)
  const results: JudgeReviewJsonResponse = await query.execute()

  return results.map((modelItem: JudgeReviewJsonResponse) => new JudgeReviewModel(modelItem))
}

export async function whereComments(value: number): Promise<JudgeReviewModel[]> {
  const query = DB.instance.selectFrom('judge_reviews').where('comments', '=', value)
  const results: JudgeReviewJsonResponse = await query.execute()

  return results.map((modelItem: JudgeReviewJsonResponse) => new JudgeReviewModel(modelItem))
}

export async function whereType(value: string): Promise<JudgeReviewModel[]> {
  const query = DB.instance.selectFrom('judge_reviews').where('type', '=', value)
  const results: JudgeReviewJsonResponse = await query.execute()

  return results.map((modelItem: JudgeReviewJsonResponse) => new JudgeReviewModel(modelItem))
}

export async function whereStatus(value: string): Promise<JudgeReviewModel[]> {
  const query = DB.instance.selectFrom('judge_reviews').where('status', '=', value)
  const results: JudgeReviewJsonResponse = await query.execute()

  return results.map((modelItem: JudgeReviewJsonResponse) => new JudgeReviewModel(modelItem))
}

export const JudgeReview = JudgeReviewModel

export default JudgeReview
