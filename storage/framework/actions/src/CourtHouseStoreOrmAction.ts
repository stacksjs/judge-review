import type { CourtHouseRequestType } from '@stacksjs/orm'
import { Action } from '@stacksjs/actions'

import { CourtHouse } from '@stacksjs/orm'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'CourtHouse Store',
  description: 'CourtHouse Store ORM Action',
  method: 'POST',
  async handle(request: CourtHouseRequestType) {
    await request.validate()
    const model = await CourtHouse.create(request.all())

    return response.json(model)
  },
})
