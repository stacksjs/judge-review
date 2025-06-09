import type { CourtHouseRequestType } from '@stacksjs/orm'
import { Action } from '@stacksjs/actions'

import { CourtHouse } from '@stacksjs/orm'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'CourtHouse Show',
  description: 'CourtHouse Show ORM Action',
  method: 'GET',
  async handle(request: CourtHouseRequestType) {
    const id = request.getParam('id')

    const model = await CourtHouse.findOrFail(id)

    return response.json(model)
  },
})
