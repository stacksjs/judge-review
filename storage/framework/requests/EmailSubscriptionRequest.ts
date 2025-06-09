import type { schema } from '@stacksjs/validation'
import type { EmailSubscriptionRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataEmailSubscription {
  id: number
  email: string
  deleted_at?: string
  created_at?: string
  updated_at?: string
}
export class EmailSubscriptionRequest extends Request<RequestDataEmailSubscription> implements EmailSubscriptionRequestType {
  public id = 1
  public email = ''
  public created_at = ''
  public updated_at = ''

  public deleted_at = ''

  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('EmailSubscription', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const emailSubscriptionRequest = new EmailSubscriptionRequest()
