import type { JudgeReviewRequestType } from '@stacksjs/orm'
import { Action } from '@stacksjs/actions'

import { JudgeReview } from '@stacksjs/orm'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'JudgeReview Show',
  description: 'JudgeReview Show ORM Action',
  method: 'GET',
  async handle(request: JudgeReviewRequestType) {
    const id = request.getParam('id')

    const model = await JudgeReview.findOrFail(id)

    return response.json(model)
  },
})
