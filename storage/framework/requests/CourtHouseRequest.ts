import type { schema } from '@stacksjs/validation'
import type { CourtHouseRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataCourtHouse {
  id: number
  name: string
  image: string
  address: string
  city: string
  state: string
  zip_code: string
  created_at?: string
  updated_at?: string
}
export class CourtHouseRequest extends Request<RequestDataCourtHouse> implements CourtHouseRequestType {
  public id = 1
  public name = ''
  public image = ''
  public address = ''
  public city = ''
  public state = ''
  public zip_code = ''
  public created_at = ''
  public updated_at = ''
  public uuid = ''
  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('CourtHouse', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const courtHouseRequest = new CourtHouseRequest()
