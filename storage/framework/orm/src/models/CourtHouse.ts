import type { Generated, Insertable, RawBuilder, Selectable, Updateable } from '@stacksjs/database'
import type { Operator } from '@stacksjs/orm'
import type { JudgeModel } from './Judge'
import { randomUUIDv7 } from 'bun'
import { sql } from '@stacksjs/database'
import { HttpError } from '@stacksjs/error-handling'
import { dispatch } from '@stacksjs/events'
import { DB } from '@stacksjs/orm'

import { BaseOrm } from '../utils/base'

export interface CourtHousesTable {
  id: Generated<number>
  name: string
  image: string
  address: string
  city: string
  state: string
  zip_code: string
  uuid?: string

  created_at?: string

  updated_at?: string

}

// Type for reading model data (created_at is required)
export type CourtHouseRead = CourtHousesTable

// Type for creating/updating model data (created_at is optional)
export type CourtHouseWrite = Omit<CourtHousesTable, 'created_at'> & {
  created_at?: string
}

export interface CourtHouseResponse {
  data: CourtHouseJsonResponse[]
  paging: {
    total_records: number
    page: number
    total_pages: number
  }
  next_cursor: number | null
}

export interface CourtHouseJsonResponse extends Omit<Selectable<CourtHouseRead>, 'password'> {
  [key: string]: any
}

export type NewCourtHouse = Insertable<CourtHouseWrite>
export type CourtHouseUpdate = Updateable<CourtHouseWrite>

export class CourtHouseModel extends BaseOrm<CourtHouseModel, CourtHousesTable, CourtHouseJsonResponse> {
  private readonly hidden: Array<keyof CourtHouseJsonResponse> = []
  private readonly fillable: Array<keyof CourtHouseJsonResponse> = ['name', 'image', 'address', 'city', 'state', 'zip_code', 'uuid']
  private readonly guarded: Array<keyof CourtHouseJsonResponse> = []
  protected attributes = {} as CourtHouseJsonResponse
  protected originalAttributes = {} as CourtHouseJsonResponse

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

  constructor(courtHouse: CourtHouseJsonResponse | undefined) {
    super('court_houses')
    if (courtHouse) {
      this.attributes = { ...courtHouse }
      this.originalAttributes = { ...courtHouse }

      Object.keys(courtHouse).forEach((key) => {
        if (!(key in this)) {
          this.customColumns[key] = (courtHouse as CourtHouseJsonResponse)[key]
        }
      })
    }

    this.withRelations = []
    this.selectFromQuery = DB.instance.selectFrom('court_houses')
    this.updateFromQuery = DB.instance.updateTable('court_houses')
    this.deleteFromQuery = DB.instance.deleteFrom('court_houses')
    this.hasSelect = false
  }

  protected async loadRelations(models: CourtHouseJsonResponse | CourtHouseJsonResponse[]): Promise<void> {
    // Handle both single model and array of models
    const modelArray = Array.isArray(models) ? models : [models]
    if (!modelArray.length)
      return

    const modelIds = modelArray.map(model => model.id)

    for (const relation of this.withRelations) {
      const relatedRecords = await DB.instance
        .selectFrom(relation)
        .where('courtHouse_id', 'in', modelIds)
        .selectAll()
        .execute()

      if (Array.isArray(models)) {
        models.map((model: CourtHouseJsonResponse) => {
          const records = relatedRecords.filter((record: { courtHouse_id: number }) => {
            return record.courtHouse_id === model.id
          })

          model[relation] = records.length === 1 ? records[0] : records
          return model
        })
      }
      else {
        const records = relatedRecords.filter((record: { courtHouse_id: number }) => {
          return record.courtHouse_id === models.id
        })

        models[relation] = records.length === 1 ? records[0] : records
      }
    }
  }

  static with(relations: string[]): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWith(relations)
  }

  protected mapCustomGetters(models: CourtHouseJsonResponse | CourtHouseJsonResponse[]): void {
    const data = models

    if (Array.isArray(data)) {
      data.map((model: CourtHouseJsonResponse) => {
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

  async mapCustomSetters(model: NewCourtHouse | CourtHouseUpdate): Promise<void> {
    const customSetter = {
      default: () => {
      },

    }

    for (const [key, fn] of Object.entries(customSetter)) {
      (model as any)[key] = await fn()
    }
  }

  get judges(): JudgeModel[] | [] {
    return this.attributes.judges
  }

  get id(): number {
    return this.attributes.id
  }

  get uuid(): string | undefined {
    return this.attributes.uuid
  }

  get name(): string {
    return this.attributes.name
  }

  get image(): string {
    return this.attributes.image
  }

  get address(): string {
    return this.attributes.address
  }

  get city(): string {
    return this.attributes.city
  }

  get state(): string {
    return this.attributes.state
  }

  get zip_code(): string {
    return this.attributes.zip_code
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

  set name(value: string) {
    this.attributes.name = value
  }

  set image(value: string) {
    this.attributes.image = value
  }

  set address(value: string) {
    this.attributes.address = value
  }

  set city(value: string) {
    this.attributes.city = value
  }

  set state(value: string) {
    this.attributes.state = value
  }

  set zip_code(value: string) {
    this.attributes.zip_code = value
  }

  set updated_at(value: string) {
    this.attributes.updated_at = value
  }

  static select(params: (keyof CourtHouseJsonResponse)[] | RawBuilder<string> | string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applySelect(params)
  }

  // Method to find a CourtHouse by ID
  static async find(id: number): Promise<CourtHouseModel | undefined> {
    const query = DB.instance.selectFrom('court_houses').where('id', '=', id).selectAll()

    const model = await query.executeTakeFirst()

    if (!model)
      return undefined

    const instance = new CourtHouseModel(undefined)
    return instance.createInstance(model)
  }

  static async first(): Promise<CourtHouseModel | undefined> {
    const instance = new CourtHouseModel(undefined)

    const model = await instance.applyFirst()

    const data = new CourtHouseModel(model)

    return data
  }

  static async last(): Promise<CourtHouseModel | undefined> {
    const instance = new CourtHouseModel(undefined)

    const model = await instance.applyLast()

    if (!model)
      return undefined

    return new CourtHouseModel(model)
  }

  static async firstOrFail(): Promise<CourtHouseModel | undefined> {
    const instance = new CourtHouseModel(undefined)

    return await instance.applyFirstOrFail()
  }

  static async all(): Promise<CourtHouseModel[]> {
    const instance = new CourtHouseModel(undefined)

    const models = await DB.instance.selectFrom('court_houses').selectAll().execute()

    instance.mapCustomGetters(models)

    const data = await Promise.all(models.map(async (model: CourtHouseJsonResponse) => {
      return new CourtHouseModel(model)
    }))

    return data
  }

  static async findOrFail(id: number): Promise<CourtHouseModel | undefined> {
    const instance = new CourtHouseModel(undefined)

    return await instance.applyFindOrFail(id)
  }

  static async findMany(ids: number[]): Promise<CourtHouseModel[]> {
    const instance = new CourtHouseModel(undefined)

    const models = await instance.applyFindMany(ids)

    return models.map((modelItem: CourtHouseJsonResponse) => instance.parseResult(new CourtHouseModel(modelItem)))
  }

  static async latest(column: keyof CourtHousesTable = 'created_at'): Promise<CourtHouseModel | undefined> {
    const instance = new CourtHouseModel(undefined)

    const model = await instance.selectFromQuery
      .selectAll()
      .orderBy(column, 'desc')
      .limit(1)
      .executeTakeFirst()

    if (!model)
      return undefined

    return new CourtHouseModel(model)
  }

  static async oldest(column: keyof CourtHousesTable = 'created_at'): Promise<CourtHouseModel | undefined> {
    const instance = new CourtHouseModel(undefined)

    const model = await instance.selectFromQuery
      .selectAll()
      .orderBy(column, 'asc')
      .limit(1)
      .executeTakeFirst()

    if (!model)
      return undefined

    return new CourtHouseModel(model)
  }

  static skip(count: number): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applySkip(count)
  }

  static take(count: number): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyTake(count)
  }

  static where<V = string>(column: keyof CourtHousesTable, ...args: [V] | [Operator, V]): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhere<V>(column, ...args)
  }

  static orWhere(...conditions: [string, any][]): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyOrWhere(...conditions)
  }

  static whereNotIn<V = number>(column: keyof CourtHousesTable, values: V[]): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereNotIn<V>(column, values)
  }

  static whereBetween<V = number>(column: keyof CourtHousesTable, range: [V, V]): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereBetween<V>(column, range)
  }

  static whereRef(column: keyof CourtHousesTable, ...args: string[]): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereRef(column, ...args)
  }

  static when(condition: boolean, callback: (query: CourtHouseModel) => CourtHouseModel): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhen(condition, callback as any)
  }

  static whereNull(column: keyof CourtHousesTable): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereNull(column)
  }

  static whereNotNull(column: keyof CourtHousesTable): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereNotNull(column)
  }

  static whereLike(column: keyof CourtHousesTable, value: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereLike(column, value)
  }

  static orderBy(column: keyof CourtHousesTable, order: 'asc' | 'desc'): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyOrderBy(column, order)
  }

  static orderByAsc(column: keyof CourtHousesTable): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyOrderByAsc(column)
  }

  static orderByDesc(column: keyof CourtHousesTable): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyOrderByDesc(column)
  }

  static groupBy(column: keyof CourtHousesTable): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyGroupBy(column)
  }

  static having<V = string>(column: keyof CourtHousesTable, operator: Operator, value: V): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyHaving<V>(column, operator, value)
  }

  static inRandomOrder(): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyInRandomOrder()
  }

  static whereColumn(first: keyof CourtHousesTable, operator: Operator, second: keyof CourtHousesTable): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereColumn(first, operator, second)
  }

  static async max(field: keyof CourtHousesTable): Promise<number> {
    const instance = new CourtHouseModel(undefined)

    return await instance.applyMax(field)
  }

  static async min(field: keyof CourtHousesTable): Promise<number> {
    const instance = new CourtHouseModel(undefined)

    return await instance.applyMin(field)
  }

  static async avg(field: keyof CourtHousesTable): Promise<number> {
    const instance = new CourtHouseModel(undefined)

    return await instance.applyAvg(field)
  }

  static async sum(field: keyof CourtHousesTable): Promise<number> {
    const instance = new CourtHouseModel(undefined)

    return await instance.applySum(field)
  }

  static async count(): Promise<number> {
    const instance = new CourtHouseModel(undefined)

    return instance.applyCount()
  }

  static async get(): Promise<CourtHouseModel[]> {
    const instance = new CourtHouseModel(undefined)

    const results = await instance.applyGet()

    return results.map((item: CourtHouseJsonResponse) => instance.createInstance(item))
  }

  static async pluck<K extends keyof CourtHouseModel>(field: K): Promise<CourtHouseModel[K][]> {
    const instance = new CourtHouseModel(undefined)

    return await instance.applyPluck(field)
  }

  static async chunk(size: number, callback: (models: CourtHouseModel[]) => Promise<void>): Promise<void> {
    const instance = new CourtHouseModel(undefined)

    await instance.applyChunk(size, async (models) => {
      const modelInstances = models.map((item: CourtHouseJsonResponse) => instance.createInstance(item))
      await callback(modelInstances)
    })
  }

  static async paginate(options: { limit?: number, offset?: number, page?: number } = { limit: 10, offset: 0, page: 1 }): Promise<{
    data: CourtHouseModel[]
    paging: {
      total_records: number
      page: number
      total_pages: number
    }
    next_cursor: number | null
  }> {
    const instance = new CourtHouseModel(undefined)

    const result = await instance.applyPaginate(options)

    return {
      data: result.data.map((item: CourtHouseJsonResponse) => instance.createInstance(item)),
      paging: result.paging,
      next_cursor: result.next_cursor,
    }
  }

  // Instance method for creating model instances
  createInstance(data: CourtHouseJsonResponse): CourtHouseModel {
    return new CourtHouseModel(data)
  }

  async applyCreate(newCourtHouse: NewCourtHouse): Promise<CourtHouseModel> {
    const filteredValues = Object.fromEntries(
      Object.entries(newCourtHouse).filter(([key]) =>
        !this.guarded.includes(key) && this.fillable.includes(key),
      ),
    ) as NewCourtHouse

    await this.mapCustomSetters(filteredValues)

    filteredValues.uuid = randomUUIDv7()

    const result = await DB.instance.insertInto('court_houses')
      .values(filteredValues)
      .executeTakeFirst()

    const model = await DB.instance.selectFrom('court_houses')
      .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
      .selectAll()
      .executeTakeFirst()

    if (!model) {
      throw new HttpError(500, 'Failed to retrieve created CourtHouse')
    }

    if (model)
      dispatch('courtHouse:created', model)
    return this.createInstance(model)
  }

  async create(newCourtHouse: NewCourtHouse): Promise<CourtHouseModel> {
    return await this.applyCreate(newCourtHouse)
  }

  static async create(newCourtHouse: NewCourtHouse): Promise<CourtHouseModel> {
    const instance = new CourtHouseModel(undefined)
    return await instance.applyCreate(newCourtHouse)
  }

  static async firstOrCreate(search: Partial<CourtHousesTable>, values: NewCourtHouse = {} as NewCourtHouse): Promise<CourtHouseModel> {
    // First try to find a record matching the search criteria
    const instance = new CourtHouseModel(undefined)

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
    const createData = { ...search, ...values } as NewCourtHouse
    return await CourtHouseModel.create(createData)
  }

  static async updateOrCreate(search: Partial<CourtHousesTable>, values: NewCourtHouse = {} as NewCourtHouse): Promise<CourtHouseModel> {
    // First try to find a record matching the search criteria
    const instance = new CourtHouseModel(undefined)

    // Apply all search conditions
    for (const [key, value] of Object.entries(search)) {
      instance.selectFromQuery = instance.selectFromQuery.where(key, '=', value)
    }

    // Try to find the record
    const existingRecord = await instance.applyFirst()

    if (existingRecord) {
      // If record exists, update it with the new values
      const model = instance.createInstance(existingRecord)
      const updatedModel = await model.update(values as CourtHouseUpdate)

      // Return the updated model instance
      if (updatedModel) {
        return updatedModel
      }

      // If update didn't return a model, fetch it again to ensure we have latest data
      const refreshedModel = await instance.applyFirst()
      return instance.createInstance(refreshedModel!)
    }

    // If no record exists, create a new one with combined search criteria and values
    const createData = { ...search, ...values } as NewCourtHouse
    return await CourtHouseModel.create(createData)
  }

  async update(newCourtHouse: CourtHouseUpdate): Promise<CourtHouseModel | undefined> {
    const filteredValues = Object.fromEntries(
      Object.entries(newCourtHouse).filter(([key]) =>
        !this.guarded.includes(key) && this.fillable.includes(key),
      ),
    ) as CourtHouseUpdate

    await this.mapCustomSetters(filteredValues)

    filteredValues.updated_at = new Date().toISOString()

    await DB.instance.updateTable('court_houses')
      .set(filteredValues)
      .where('id', '=', this.id)
      .executeTakeFirst()

    if (this.id) {
      // Get the updated data
      const model = await DB.instance.selectFrom('court_houses')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated CourtHouse')
      }

      if (model)
        dispatch('courtHouse:updated', model)
      return this.createInstance(model)
    }

    return undefined
  }

  async forceUpdate(newCourtHouse: CourtHouseUpdate): Promise<CourtHouseModel | undefined> {
    await DB.instance.updateTable('court_houses')
      .set(newCourtHouse)
      .where('id', '=', this.id)
      .executeTakeFirst()

    if (this.id) {
      // Get the updated data
      const model = await DB.instance.selectFrom('court_houses')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated CourtHouse')
      }

      if (this)
        dispatch('courtHouse:updated', model)
      return this.createInstance(model)
    }

    return undefined
  }

  async save(): Promise<CourtHouseModel> {
    // If the model has an ID, update it; otherwise, create a new record
    if (this.id) {
      // Update existing record
      await DB.instance.updateTable('court_houses')
        .set(this.attributes as CourtHouseUpdate)
        .where('id', '=', this.id)
        .executeTakeFirst()

      // Get the updated data
      const model = await DB.instance.selectFrom('court_houses')
        .where('id', '=', this.id)
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve updated CourtHouse')
      }

      if (this)
        dispatch('courtHouse:updated', model)
      return this.createInstance(model)
    }
    else {
      // Create new record
      const result = await DB.instance.insertInto('court_houses')
        .values(this.attributes as NewCourtHouse)
        .executeTakeFirst()

      // Get the created data
      const model = await DB.instance.selectFrom('court_houses')
        .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
        .selectAll()
        .executeTakeFirst()

      if (!model) {
        throw new HttpError(500, 'Failed to retrieve created CourtHouse')
      }

      if (this)
        dispatch('courtHouse:created', model)
      return this.createInstance(model)
    }
  }

  static async createMany(newCourtHouse: NewCourtHouse[]): Promise<void> {
    const instance = new CourtHouseModel(undefined)

    const valuesFiltered = newCourtHouse.map((newCourtHouse: NewCourtHouse) => {
      const filteredValues = Object.fromEntries(
        Object.entries(newCourtHouse).filter(([key]) =>
          !instance.guarded.includes(key) && instance.fillable.includes(key),
        ),
      ) as NewCourtHouse

      filteredValues.uuid = randomUUIDv7()

      return filteredValues
    })

    await DB.instance.insertInto('court_houses')
      .values(valuesFiltered)
      .executeTakeFirst()
  }

  static async forceCreate(newCourtHouse: NewCourtHouse): Promise<CourtHouseModel> {
    const result = await DB.instance.insertInto('court_houses')
      .values(newCourtHouse)
      .executeTakeFirst()

    const instance = new CourtHouseModel(undefined)
    const model = await DB.instance.selectFrom('court_houses')
      .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
      .selectAll()
      .executeTakeFirst()

    if (!model) {
      throw new HttpError(500, 'Failed to retrieve created CourtHouse')
    }

    if (model)
      dispatch('courtHouse:created', model)

    return instance.createInstance(model)
  }

  // Method to remove a CourtHouse
  async delete(): Promise<number> {
    if (this.id === undefined)
      this.deleteFromQuery.execute()
    const model = await this.find(Number(this.id))

    if (model)
      dispatch('courtHouse:deleted', model)

    const deleted = await DB.instance.deleteFrom('court_houses')
      .where('id', '=', this.id)
      .execute()

    return deleted.numDeletedRows
  }

  static async remove(id: number): Promise<any> {
    const instance = new CourtHouseModel(undefined)

    const model = await instance.find(Number(id))

    if (model)
      dispatch('courtHouse:deleted', model)

    return await DB.instance.deleteFrom('court_houses')
      .where('id', '=', id)
      .execute()
  }

  static whereName(value: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('name', '=', value)

    return instance
  }

  static whereImage(value: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('image', '=', value)

    return instance
  }

  static whereAddress(value: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('address', '=', value)

    return instance
  }

  static whereCity(value: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('city', '=', value)

    return instance
  }

  static whereState(value: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('state', '=', value)

    return instance
  }

  static whereZipCode(value: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    instance.selectFromQuery = instance.selectFromQuery.where('zip_code', '=', value)

    return instance
  }

  static whereIn<V = number>(column: keyof CourtHousesTable, values: V[]): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyWhereIn<V>(column, values)
  }

  toSearchableObject(): Partial<CourtHouseJsonResponse> {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
    }
  }

  static distinct(column: keyof CourtHouseJsonResponse): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyDistinct(column)
  }

  static join(table: string, firstCol: string, secondCol: string): CourtHouseModel {
    const instance = new CourtHouseModel(undefined)

    return instance.applyJoin(table, firstCol, secondCol)
  }

  toJSON(): CourtHouseJsonResponse {
    const output = {

      uuid: this.uuid,

      id: this.id,
      name: this.name,
      image: this.image,
      address: this.address,
      city: this.city,
      state: this.state,
      zip_code: this.zip_code,

      created_at: this.created_at,

      updated_at: this.updated_at,

      judges: this.judges,
      ...this.customColumns,
    }

    return output
  }

  parseResult(model: CourtHouseModel): CourtHouseModel {
    for (const hiddenAttribute of this.hidden) {
      delete model[hiddenAttribute as keyof CourtHouseModel]
    }

    return model
  }

  // Add a protected applyFind implementation
  protected async applyFind(id: number): Promise<CourtHouseModel | undefined> {
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

export async function find(id: number): Promise<CourtHouseModel | undefined> {
  const query = DB.instance.selectFrom('court_houses').where('id', '=', id).selectAll()

  const model = await query.executeTakeFirst()

  if (!model)
    return undefined

  const instance = new CourtHouseModel(undefined)
  return instance.createInstance(model)
}

export async function count(): Promise<number> {
  const results = await CourtHouseModel.count()

  return results
}

export async function create(newCourtHouse: NewCourtHouse): Promise<CourtHouseModel> {
  const instance = new CourtHouseModel(undefined)
  return await instance.applyCreate(newCourtHouse)
}

export async function rawQuery(rawQuery: string): Promise<any> {
  return await sql`${rawQuery}`.execute(DB.instance)
}

export async function remove(id: number): Promise<void> {
  await DB.instance.deleteFrom('court_houses')
    .where('id', '=', id)
    .execute()
}

export async function whereName(value: string): Promise<CourtHouseModel[]> {
  const query = DB.instance.selectFrom('court_houses').where('name', '=', value)
  const results: CourtHouseJsonResponse = await query.execute()

  return results.map((modelItem: CourtHouseJsonResponse) => new CourtHouseModel(modelItem))
}

export async function whereImage(value: string): Promise<CourtHouseModel[]> {
  const query = DB.instance.selectFrom('court_houses').where('image', '=', value)
  const results: CourtHouseJsonResponse = await query.execute()

  return results.map((modelItem: CourtHouseJsonResponse) => new CourtHouseModel(modelItem))
}

export async function whereAddress(value: string): Promise<CourtHouseModel[]> {
  const query = DB.instance.selectFrom('court_houses').where('address', '=', value)
  const results: CourtHouseJsonResponse = await query.execute()

  return results.map((modelItem: CourtHouseJsonResponse) => new CourtHouseModel(modelItem))
}

export async function whereCity(value: string): Promise<CourtHouseModel[]> {
  const query = DB.instance.selectFrom('court_houses').where('city', '=', value)
  const results: CourtHouseJsonResponse = await query.execute()

  return results.map((modelItem: CourtHouseJsonResponse) => new CourtHouseModel(modelItem))
}

export async function whereState(value: string): Promise<CourtHouseModel[]> {
  const query = DB.instance.selectFrom('court_houses').where('state', '=', value)
  const results: CourtHouseJsonResponse = await query.execute()

  return results.map((modelItem: CourtHouseJsonResponse) => new CourtHouseModel(modelItem))
}

export async function whereZipCode(value: string): Promise<CourtHouseModel[]> {
  const query = DB.instance.selectFrom('court_houses').where('zip_code', '=', value)
  const results: CourtHouseJsonResponse = await query.execute()

  return results.map((modelItem: CourtHouseJsonResponse) => new CourtHouseModel(modelItem))
}

export const CourtHouse = CourtHouseModel

export default CourtHouse
