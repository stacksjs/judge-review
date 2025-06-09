import type { schema } from '@stacksjs/validation'
import type { JudgeReviewRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataJudgeReview {
  id: number
  title: string
  content: string
  rating: number
  likes: number
  comments: number
  type: string
  status: string
  created_at?: string
  updated_at?: string
}
export class JudgeReviewRequest extends Request<RequestDataJudgeReview> implements JudgeReviewRequestType {
  public id = 1
  public title = ''
  public content = ''
  public rating = 0
  public likes = 0
  public comments = 0
  public type = ''
  public status = ''
  public created_at = ''
  public updated_at = ''
  public uuid = ''
  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('JudgeReview', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const judgeReviewRequest = new JudgeReviewRequest()
