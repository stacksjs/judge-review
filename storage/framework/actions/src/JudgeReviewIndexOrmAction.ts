import { Action } from '@stacksjs/actions'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'JudgeReview Index',
  description: 'JudgeReview Index ORM Action',
  method: 'GET',
  async handle() {
    const results = await JudgeReview.all()

    return response.json(results)
  },
})
