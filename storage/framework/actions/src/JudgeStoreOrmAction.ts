import type { JudgeRequestType } from '@stacksjs/orm'
import { Action } from '@stacksjs/actions'

import { Judge } from '@stacksjs/orm'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'Judge Store',
  description: 'Judge Store ORM Action',
  method: 'POST',
  async handle(request: JudgeRequestType) {
    await request.validate()
    const model = await Judge.create(request.all())

    return response.json(model)
  },
})
