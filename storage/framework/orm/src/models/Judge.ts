import type { Generated, Insertable, RawBuilder, Selectable, Updateable, Sql} from '@stacksjs/database'
      import { manageCharge, manageCheckout, manageCustomer, manageInvoice, managePaymentMethod, manageSubscription, manageTransaction, managePrice, manageSetupIntent, type Stripe } from '@stacksjs/payments'
      import { sql } from '@stacksjs/database'
      import { DB } from '@stacksjs/orm'
      import { BaseOrm } from '../utils/base'
      import type { Operator } from '@stacksjs/orm'
      import type { CheckoutLineItem, CheckoutOptions, StripeCustomerOptions } from '@stacksjs/types'
      import { HttpError } from '@stacksjs/error-handling'
      import { dispatch } from '@stacksjs/events'
      import { generateTwoFactorSecret } from '@stacksjs/auth'
      import { verifyTwoFactorCode } from '@stacksjs/auth'
      import { cache } from '@stacksjs/cache'
      import { randomUUIDv7 } from 'bun'
      
      import type {CourtHouseModel} from './CourtHouse'


      
      
      import type { Model } from '@stacksjs/types';
import { schema } from '@stacksjs/validation';


      
      export interface JudgesTable {
        id: Generated<number>
         court_house_id: number 
 name: string
      image_url: string
     uuid?: string 

        created_at?: string

        updated_at?: string
      
      }

      // Type for reading model data (created_at is required)
      export type JudgeRead = JudgesTable

      // Type for creating/updating model data (created_at is optional)
      export type JudgeWrite = Omit<JudgesTable, 'created_at'> & {
        created_at?: string
      }

      export interface JudgeResponse {
        data: JudgeJsonResponse[]
        paging: {
          total_records: number
          page: number
          total_pages: number
        }
        next_cursor: number | null
      }

      export interface JudgeJsonResponse extends Omit<Selectable<JudgeRead>, 'password'> {
        [key: string]: any
      }

      export type NewJudge = Insertable<JudgeWrite>
      export type JudgeUpdate = Updateable<JudgeWrite>

      export class JudgeModel extends BaseOrm<JudgeModel, JudgesTable, JudgeJsonResponse> {
        private readonly hidden: Array<keyof JudgeJsonResponse> = []
        private readonly fillable: Array<keyof JudgeJsonResponse> = ["name","image_url","uuid","court_house_id"]
        private readonly guarded: Array<keyof JudgeJsonResponse> = []
        protected attributes = {} as JudgeJsonResponse
        protected originalAttributes = {} as JudgeJsonResponse
        
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

        constructor(judge: JudgeJsonResponse | undefined) {
          super('judges')
          if (judge) {

            this.attributes = { ...judge }
            this.originalAttributes = { ...judge }

            Object.keys(judge).forEach(key => {
              if (!(key in this)) {
                 this.customColumns[key] = (judge as JudgeJsonResponse)[key]
              }
            })
          }

          this.withRelations = []
          this.selectFromQuery = DB.instance.selectFrom('judges')
          this.updateFromQuery = DB.instance.updateTable('judges')
          this.deleteFromQuery = DB.instance.deleteFrom('judges')
          this.hasSelect = false
        }

        protected async loadRelations(models: JudgeJsonResponse | JudgeJsonResponse[]): Promise<void> {
          // Handle both single model and array of models
          const modelArray = Array.isArray(models) ? models : [models]
          if (!modelArray.length) return

          const modelIds = modelArray.map(model => model.id)

          for (const relation of this.withRelations) {
            const relatedRecords = await DB.instance
              .selectFrom(relation)
              .where('judge_id', 'in', modelIds)
              .selectAll()
              .execute()

            if (Array.isArray(models)) {
              models.map((model: JudgeJsonResponse) => {
                const records = relatedRecords.filter((record: { judge_id: number }) => {
                  return record.judge_id === model.id
                })

                model[relation] = records.length === 1 ? records[0] : records
                return model
              })
            } else {
              const records = relatedRecords.filter((record: { judge_id: number }) => {
                return record.judge_id === models.id
              })

              models[relation] = records.length === 1 ? records[0] : records
            }
          }
        }

        static with(relations: string[]): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWith(relations)
        }

        protected mapCustomGetters(models: JudgeJsonResponse | JudgeJsonResponse[]): void {
          const data = models

          if (Array.isArray(data)) {
            data.map((model: JudgeJsonResponse) => {

              const customGetter = {
                default: () => {
                },

                
              }

              for (const [key, fn] of Object.entries(customGetter)) {
                (model as any)[key] = fn()
              }

              return model
            })
          } else {
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

        async mapCustomSetters(model: NewJudge | JudgeUpdate): Promise<void> {
          const customSetter = {
            default: () => {
            },

            
          }

          for (const [key, fn] of Object.entries(customSetter)) {
              (model as any)[key] = await fn()
          }
        }

        get court_house_id(): number {
        return this.attributes.court_house_id
      }

get court_house(): CourtHouseModel | undefined {
        return this.attributes.court_house
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

get image_url(): string {
      return this.attributes.image_url
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

set image_url(value: string) {
      this.attributes.image_url = value
    }

set updated_at(value: string) {
      this.attributes.updated_at = value
    }



        static select(params: (keyof JudgeJsonResponse)[] | RawBuilder<string> | string): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applySelect(params)
        }

        // Method to find a Judge by ID
        static async find(id: number): Promise<JudgeModel | undefined> {
          let query = DB.instance.selectFrom('judges').where('id', '=', id).selectAll()

          const model = await query.executeTakeFirst()

          if (!model) return undefined

          const instance = new JudgeModel(undefined)
          return instance.createInstance(model)
        }

        static async first(): Promise<JudgeModel | undefined> {
          const instance = new JudgeModel(undefined)

          const model = await instance.applyFirst()

          const data = new JudgeModel(model)

          return data
        }

        static async last(): Promise<JudgeModel | undefined> {
          const instance = new JudgeModel(undefined)

          const model = await instance.applyLast()

          if (!model) return undefined

          return new JudgeModel(model)
        }

        static async firstOrFail(): Promise<JudgeModel | undefined> {
          const instance = new JudgeModel(undefined)

          return await instance.applyFirstOrFail()
        }

        static async all(): Promise<JudgeModel[]> {
          const instance = new JudgeModel(undefined)

          const models = await DB.instance.selectFrom('judges').selectAll().execute()

          instance.mapCustomGetters(models)

          const data = await Promise.all(models.map(async (model: JudgeJsonResponse) => {
            return new JudgeModel(model)
          }))

          return data
        }

        static async findOrFail(id: number): Promise<JudgeModel | undefined> {
          const instance = new JudgeModel(undefined)

          return await instance.applyFindOrFail(id)
        }

        static async findMany(ids: number[]): Promise<JudgeModel[]> {
          const instance = new JudgeModel(undefined)
           
          const models = await instance.applyFindMany(ids)

          return models.map((modelItem: JudgeJsonResponse) => instance.parseResult(new JudgeModel(modelItem)))
        }

        static async latest(column: keyof JudgesTable = 'created_at'): Promise<JudgeModel | undefined> {
          const instance = new JudgeModel(undefined)

          const model = await instance.selectFromQuery
            .selectAll()
            .orderBy(column, 'desc')
            .limit(1)
            .executeTakeFirst()

          if (!model) return undefined

          return new JudgeModel(model)
        }

        static async oldest(column: keyof JudgesTable = 'created_at'): Promise<JudgeModel | undefined> {
          const instance = new JudgeModel(undefined)

          const model = await instance.selectFromQuery
            .selectAll()
            .orderBy(column, 'asc')
            .limit(1)
            .executeTakeFirst()

          if (!model) return undefined

          return new JudgeModel(model)
        }

        static skip(count: number): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applySkip(count)
        }

        static take(count: number): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyTake(count)
        }

        static where<V = string>(column: keyof JudgesTable, ...args: [V] | [Operator, V]): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhere<V>(column, ...args)
        }

        static orWhere(...conditions: [string, any][]): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyOrWhere(...conditions)
        }

        static whereNotIn<V = number>(column: keyof JudgesTable, values: V[]): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereNotIn<V>(column, values)
        }

        static whereBetween<V = number>(column: keyof JudgesTable, range: [V, V]): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereBetween<V>(column, range)
        }

        static whereRef(column: keyof JudgesTable, ...args: string[]): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereRef(column, ...args)
        }

        static when(condition: boolean, callback: (query: JudgeModel) => JudgeModel): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhen(condition, callback as any)
        }

        static whereNull(column: keyof JudgesTable): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereNull(column)
        }

        static whereNotNull(column: keyof JudgesTable): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereNotNull(column)
        }

        static whereLike(column: keyof JudgesTable, value: string): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereLike(column, value)
        }

        static orderBy(column: keyof JudgesTable, order: 'asc' | 'desc'): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyOrderBy(column, order)
        }

        static orderByAsc(column: keyof JudgesTable): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyOrderByAsc(column)
        }

        static orderByDesc(column: keyof JudgesTable): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyOrderByDesc(column)
        }

        static groupBy(column: keyof JudgesTable): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyGroupBy(column)
        }

        static having<V = string>(column: keyof JudgesTable, operator: Operator, value: V): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyHaving<V>(column, operator, value)
        }

        static inRandomOrder(): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyInRandomOrder()
        }

        static whereColumn(first: keyof JudgesTable, operator: Operator, second: keyof JudgesTable): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereColumn(first, operator, second)
        }

        static async max(field: keyof JudgesTable): Promise<number> {
          const instance = new JudgeModel(undefined)

          return await instance.applyMax(field)
        }

        static async min(field: keyof JudgesTable): Promise<number> {
          const instance = new JudgeModel(undefined)

          return await instance.applyMin(field)
        }

        static async avg(field: keyof JudgesTable): Promise<number> {
          const instance = new JudgeModel(undefined)

          return await instance.applyAvg(field)
        }

        static async sum(field: keyof JudgesTable): Promise<number> {
          const instance = new JudgeModel(undefined)

          return await instance.applySum(field)
        }

        static async count(): Promise<number> {
          const instance = new JudgeModel(undefined)

          return instance.applyCount()
        }

        static async get(): Promise<JudgeModel[]> {
          const instance = new JudgeModel(undefined)

          const results = await instance.applyGet()

          return results.map((item: JudgeJsonResponse) => instance.createInstance(item))
        }

        static async pluck<K extends keyof JudgeModel>(field: K): Promise<JudgeModel[K][]> {
          const instance = new JudgeModel(undefined)

          return await instance.applyPluck(field)
        }

        static async chunk(size: number, callback: (models: JudgeModel[]) => Promise<void>): Promise<void> {
          const instance = new JudgeModel(undefined)

          await instance.applyChunk(size, async (models) => {
            const modelInstances = models.map((item: JudgeJsonResponse) => instance.createInstance(item))
            await callback(modelInstances)
          })
        }

        static async paginate(options: { limit?: number, offset?: number, page?: number } = { limit: 10, offset: 0, page: 1 }): Promise<{
          data: JudgeModel[],
          paging: {
            total_records: number,
            page: number,
            total_pages: number
          },
          next_cursor: number | null
        }> {
          const instance = new JudgeModel(undefined)

          const result = await instance.applyPaginate(options)

          return {
            data: result.data.map((item: JudgeJsonResponse) => instance.createInstance(item)),
            paging: result.paging,
            next_cursor: result.next_cursor
          }
        }

        // Instance method for creating model instances
        createInstance(data: JudgeJsonResponse): JudgeModel {
          return new JudgeModel(data)
        }

        async applyCreate(newJudge: NewJudge): Promise<JudgeModel> {
          const filteredValues = Object.fromEntries(
            Object.entries(newJudge).filter(([key]) =>
              !this.guarded.includes(key) && this.fillable.includes(key)
            ),
          ) as NewJudge

          await this.mapCustomSetters(filteredValues)

          filteredValues['uuid'] = randomUUIDv7()

          const result = await DB.instance.insertInto('judges')
            .values(filteredValues)
            .executeTakeFirst()

          const model = await DB.instance.selectFrom('judges')
            .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
            .selectAll()
            .executeTakeFirst()

          if (!model) {
            throw new HttpError(500, 'Failed to retrieve created Judge')
          }

          if (model)
 dispatch('judge:created', model)
          return this.createInstance(model)
        }

        async create(newJudge: NewJudge): Promise<JudgeModel> {
          return await this.applyCreate(newJudge)
        }

        static async create(newJudge: NewJudge): Promise<JudgeModel> {
          const instance = new JudgeModel(undefined)
          return await instance.applyCreate(newJudge)
        }

        static async firstOrCreate(search: Partial<JudgesTable>, values: NewJudge = {} as NewJudge): Promise<JudgeModel> {
          // First try to find a record matching the search criteria
          const instance = new JudgeModel(undefined)

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
          const createData = { ...search, ...values } as NewJudge
          return await JudgeModel.create(createData)
        }

        static async updateOrCreate(search: Partial<JudgesTable>, values: NewJudge = {} as NewJudge): Promise<JudgeModel> {
          // First try to find a record matching the search criteria
          const instance = new JudgeModel(undefined)

          // Apply all search conditions
          for (const [key, value] of Object.entries(search)) {
            instance.selectFromQuery = instance.selectFromQuery.where(key, '=', value)
          }

          // Try to find the record
          const existingRecord = await instance.applyFirst()

          if (existingRecord) {
            // If record exists, update it with the new values
            const model = instance.createInstance(existingRecord)
            const updatedModel = await model.update(values as JudgeUpdate)

            // Return the updated model instance
            if (updatedModel) {
              return updatedModel
            }

            // If update didn't return a model, fetch it again to ensure we have latest data
            const refreshedModel = await instance.applyFirst()
            return instance.createInstance(refreshedModel!)
          }

          // If no record exists, create a new one with combined search criteria and values
          const createData = { ...search, ...values } as NewJudge
          return await JudgeModel.create(createData)
        }

        async update(newJudge: JudgeUpdate): Promise<JudgeModel | undefined> {
          const filteredValues = Object.fromEntries(
            Object.entries(newJudge).filter(([key]) =>
              !this.guarded.includes(key) && this.fillable.includes(key)
            ),
          ) as JudgeUpdate

          await this.mapCustomSetters(filteredValues)

          filteredValues.updated_at = new Date().toISOString()

          await DB.instance.updateTable('judges')
            .set(filteredValues)
            .where('id', '=', this.id)
            .executeTakeFirst()

          if (this.id) {
            // Get the updated data
            const model = await DB.instance.selectFrom('judges')
              .where('id', '=', this.id)
              .selectAll()
              .executeTakeFirst()

            if (!model) {
              throw new HttpError(500, 'Failed to retrieve updated Judge')
            }

            if (model)
 dispatch('judge:updated', model)
            return this.createInstance(model)
          }

          return undefined
        }

        async forceUpdate(newJudge: JudgeUpdate): Promise<JudgeModel | undefined> {
          await DB.instance.updateTable('judges')
            .set(newJudge)
            .where('id', '=', this.id)
            .executeTakeFirst()

          if (this.id) {
            // Get the updated data
            const model = await DB.instance.selectFrom('judges')
              .where('id', '=', this.id)
              .selectAll()
              .executeTakeFirst()

            if (!model) {
              throw new HttpError(500, 'Failed to retrieve updated Judge')
            }

            if (this)
 dispatch('judge:updated', model)
            return this.createInstance(model)
          }

          return undefined
        }

        async save(): Promise<JudgeModel> {
          // If the model has an ID, update it; otherwise, create a new record
          if (this.id) {
            // Update existing record
            await DB.instance.updateTable('judges')
              .set(this.attributes as JudgeUpdate)
              .where('id', '=', this.id)
              .executeTakeFirst()

            // Get the updated data
            const model = await DB.instance.selectFrom('judges')
              .where('id', '=', this.id)
              .selectAll()
              .executeTakeFirst()

            if (!model) {
              throw new HttpError(500, 'Failed to retrieve updated Judge')
            }

            if (this)
 dispatch('judge:updated', model)
            return this.createInstance(model)
          } else {
            // Create new record
            const result = await DB.instance.insertInto('judges')
              .values(this.attributes as NewJudge)
              .executeTakeFirst()

            // Get the created data
            const model = await DB.instance.selectFrom('judges')
              .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
              .selectAll()
              .executeTakeFirst()

            if (!model) {
              throw new HttpError(500, 'Failed to retrieve created Judge')
            }

            if (this)
 dispatch('judge:created', model)
            return this.createInstance(model)
          }
        }

        static async createMany(newJudge: NewJudge[]): Promise<void> {
          const instance = new JudgeModel(undefined)

          const valuesFiltered = newJudge.map((newJudge: NewJudge) => {
            const filteredValues = Object.fromEntries(
              Object.entries(newJudge).filter(([key]) =>
                !instance.guarded.includes(key) && instance.fillable.includes(key),
              ),
            ) as NewJudge

            filteredValues['uuid'] = randomUUIDv7()

            return filteredValues
          })

          await DB.instance.insertInto('judges')
            .values(valuesFiltered)
            .executeTakeFirst()
        }

        static async forceCreate(newJudge: NewJudge): Promise<JudgeModel> {
          const result = await DB.instance.insertInto('judges')
            .values(newJudge)
            .executeTakeFirst()

          const instance = new JudgeModel(undefined)
          const model = await DB.instance.selectFrom('judges')
            .where('id', '=', Number(result.insertId || result.numInsertedOrUpdatedRows))
            .selectAll()
            .executeTakeFirst()

          if (!model) {
            throw new HttpError(500, 'Failed to retrieve created Judge')
          }

          if (model)
 dispatch('judge:created', model)

          return instance.createInstance(model)
        }

        // Method to remove a Judge
        async delete(): Promise<number> {
          if (this.id === undefined)
            this.deleteFromQuery.execute()
          const model = await this.find(Number(this.id))
          
          if (model)
 dispatch('judge:deleted', model)

          const deleted = await DB.instance.deleteFrom('judges')
            .where('id', '=', this.id)
            .execute()

          return deleted.numDeletedRows
        }

        static async remove(id: number): Promise<any> {
          const instance = new JudgeModel(undefined)

          const model = await instance.find(Number(id))

          

          if (model)
 dispatch('judge:deleted', model)

          return await DB.instance.deleteFrom('judges')
            .where('id', '=', id)
            .execute()
        }

        static whereName(value: string): JudgeModel {
          const instance = new JudgeModel(undefined)

          instance.selectFromQuery = instance.selectFromQuery.where('name', '=', value)

          return instance
        } 

static whereImageUrl(value: string): JudgeModel {
          const instance = new JudgeModel(undefined)

          instance.selectFromQuery = instance.selectFromQuery.where('image_url', '=', value)

          return instance
        } 



        static whereIn<V = number>(column: keyof JudgesTable, values: V[]): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyWhereIn<V>(column, values)
        }

        
        async courtHouseBelong(): Promise<CourtHouseModel> {
          if (this.court_house_id === undefined)
            throw new HttpError(500, 'Relation Error!')

          const model = await CourtHouse
            .where('id', '=', this.court_house_id)
            .first()

          if (! model)
            throw new HttpError(500, 'Model Relation Not Found!')

          return model
        }



        
          toSearchableObject(): Partial<JudgeJsonResponse> {
              return {
                  id: this.id,
name: this.name,
image_url: this.image_url
              }
          }
      

        

        

        static distinct(column: keyof JudgeJsonResponse): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyDistinct(column)
        }

        static join(table: string, firstCol: string, secondCol: string): JudgeModel {
          const instance = new JudgeModel(undefined)

          return instance.applyJoin(table, firstCol, secondCol)
        }

        toJSON(): JudgeJsonResponse {
          const output = {

 uuid: this.uuid,

id: this.id,
name: this.name,
   image_url: this.image_url,
   
        created_at: this.created_at,

        updated_at: this.updated_at,

      court_house_id: this.court_house_id,
   court_house: this.court_house,
...this.customColumns,
}

          return output
        }

        parseResult(model: JudgeModel): JudgeModel {
          for (const hiddenAttribute of this.hidden) {
            delete model[hiddenAttribute as keyof JudgeModel]
          }

          return model
        }

        

        // Add a protected applyFind implementation
        protected async applyFind(id: number): Promise<JudgeModel | undefined> {
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

      export async function find(id: number): Promise<JudgeModel | undefined> {
        let query = DB.instance.selectFrom('judges').where('id', '=', id).selectAll()

        const model = await query.executeTakeFirst()

        if (!model) return undefined

        const instance = new JudgeModel(undefined)
        return instance.createInstance(model)
      }

      export async function count(): Promise<number> {
        const results = await JudgeModel.count()

        return results
      }

      export async function create(newJudge: NewJudge): Promise<JudgeModel> {
        const instance = new JudgeModel(undefined)
        return await instance.applyCreate(newJudge)
      }

      export async function rawQuery(rawQuery: string): Promise<any> {
        return await sql`${rawQuery}`.execute(DB.instance)
      }

      export async function remove(id: number): Promise<void> {
        await DB.instance.deleteFrom('judges')
          .where('id', '=', id)
          .execute()
      }

      export async function whereName(value: string): Promise<JudgeModel[]> {
          const query = DB.instance.selectFrom('judges').where('name', '=', value)
          const results: JudgeJsonResponse = await query.execute()

          return results.map((modelItem: JudgeJsonResponse) => new JudgeModel(modelItem))
        } 

export async function whereImageUrl(value: string): Promise<JudgeModel[]> {
          const query = DB.instance.selectFrom('judges').where('image_url', '=', value)
          const results: JudgeJsonResponse = await query.execute()

          return results.map((modelItem: JudgeJsonResponse) => new JudgeModel(modelItem))
        } 



      export const Judge = JudgeModel

      export default Judge
      