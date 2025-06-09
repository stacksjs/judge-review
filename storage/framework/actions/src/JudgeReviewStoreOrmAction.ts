import type { JudgeReviewRequestType } from '@stacksjs/orm'
import { Action } from '@stacksjs/actions'

import { JudgeReview } from '@stacksjs/orm'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'JudgeReview Store',
  description: 'JudgeReview Store ORM Action',
  method: 'POST',
  async handle(request: JudgeReviewRequestType) {
    await request.validate()
    const model = await JudgeReview.create(request.all())

    return response.json(model)
  },
})
