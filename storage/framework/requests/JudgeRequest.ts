import type { schema } from '@stacksjs/validation'
import type { JudgeRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataJudge {
  id: number
  name: string
  image_url: string
  court_house_id: number
  created_at?: string
  updated_at?: string
}
export class JudgeRequest extends Request<RequestDataJudge> implements JudgeRequestType {
  public id = 1
  public name = ''
  public image_url = ''
  public court_house_id = 0
  public created_at = ''
  public updated_at = ''
  public uuid = ''
  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('Judge', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const judgeRequest = new JudgeRequest()
