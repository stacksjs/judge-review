import { BentoCache, bentostore } from 'bentocache'
import { dynamoDbDriver } from 'bentocache/drivers/dynamodb'
import { BaseCacheDriver } from './base'

export interface DynamoDBOptions {
  endpoint?: string
  region?: string
  tableName?: string
  accessKeyId?: string
  secretAccessKey?: string
}

export class DynamoDBCacheDriver extends BaseCacheDriver {
  constructor(options: DynamoDBOptions = {}) {
    const client = new BentoCache({
      default: 'dynamo',
      stores: {
        dynamo: bentostore().useL2Layer(
          dynamoDbDriver({
            endpoint: options.endpoint ?? 'http://localhost:8000',
            region: options.region ?? 'us-east-1',
            table: {
              name: options.tableName ?? 'stacks',
            },
            credentials: {
              accessKeyId: options.accessKeyId ?? 'dummy',
              secretAccessKey: options.secretAccessKey ?? 'dummy',
            },
          }),
        ),
      },
    })

    super(client)
  }
}

export const dynamodb: DynamoDBCacheDriver = new DynamoDBCacheDriver()
