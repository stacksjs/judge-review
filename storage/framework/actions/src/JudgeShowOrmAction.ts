import type { JudgeRequestType } from '@stacksjs/orm'
import { Action } from '@stacksjs/actions'

import { Judge } from '@stacksjs/orm'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'Judge Show',
  description: 'Judge Show ORM Action',
  method: 'GET',
  async handle(request: JudgeRequestType) {
    const id = request.getParam('id')

    const model = await Judge.findOrFail(id)

    return response.json(model)
  },
})
